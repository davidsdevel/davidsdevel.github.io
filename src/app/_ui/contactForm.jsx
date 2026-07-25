'use client'

import Input from '@/app/_ui/input';
import { sendContactMessage } from '@/lib/telegram/webhook';
import { validateEmail } from '@/lib/validation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendGAEvent } from '@next/third-parties/google'

export default function ContactForm({defaultMessage = '', buttonText = 'Enviar', eventForm = '', mode = 'contact', onSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [isLoading, setIsLoading] = useState(false);

  const isEbook = mode === 'ebook';

  const handleSubmit = async e => {
    e.preventDefault();

    if (isLoading)
      return;

    setIsLoading(true);

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid)
      return toast.info(emailValidation.error);

    if (!isEbook) {
      if (!name)
        return toast.info('El nombre es requerido');

      if (!message)
        return toast.info('El mensaje es requerido');
    }

    sendGAEvent('event', eventForm || 'contact', {
      origin: eventForm
    });

    if (isEbook && onSubmit) {
      await onSubmit(email);
      return;
    }

    const messagePromise = async () => {
      try {
        const {status} = await sendContactMessage(name, email, message);
        
        if (status === 'OK') {
          setName('');
          setEmail('');
          setMessage('');

          return Promise.resolve();
        }
  
        return Promise.reject();
      } catch (error) {
        return Promise.reject();
      } finally {
        setIsLoading(false)
      }
    }

    toast.promise(
      messagePromise,
      {
        pending: 'Enviando mensaje...',
        success: 'Mensaje enviado correctamente',
        error: 'Error al enviar el mensaje'
      }
    )
  }

  return <form onSubmit={handleSubmit}>
      {!isEbook && <Input label='Nombre' placeholder='Juan Perez' onChange={({target: {value}}) => setName(value)} value={name}/>}
      <Input label='Correo' type='email' placeholder='juan@domain.com' onChange={({target: {value}}) => setEmail(value)} value={email}/>
      {!isEbook && <Input className='h-40 resize-none' label='Mensaje' type='textarea' onChange={({target: {value}}) => setMessage(value)} value={message}/>}
      <button className='bg-accent-1 text-white w-full py-3 rounded-full mt-2' disabled={isLoading}>{buttonText}</button>
  </form>
}
