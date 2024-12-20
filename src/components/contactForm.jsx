'use client'

import Input from '@/components/input';
import { sendContactMessage } from '../actions';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendGAEvent } from '@next/third-parties/google'

export default function ContactForm({defaultMessage = '', buttonText = 'Enviar', eventForm = ''}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (isLoading)
      return;

    if (!name)
      return toast.info('El nombre es requerido');

    if (!email)
      return toast.info('El correo es requerido');

    if (!message)
      return toast.info('El mensaje es requerido');

    sendGAEvent('event', 'contact', {
      origin: eventForm
    });

    const messagePromise = async () => {
      setIsLoading(true)

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
      <Input label='Nombre' placeholder='Juan Perez' onChange={({target: {value}}) => setName(value)} value={name}/>
      <Input label='Correo' type='email' placeholder='juan@domain.com' onChange={({target: {value}}) => setEmail(value)} value={email}/>
      <Input className='h-40 resize-none' label='Mensaje' type='textarea' onChange={({target: {value}}) => setMessage(value)} value={message}/>
      <button className='bg-accent-1 text-white w-full py-3 rounded-full' disabled={isLoading}>{buttonText}</button>
  </form>
}
