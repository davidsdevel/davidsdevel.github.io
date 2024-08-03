'use client'

import Input from '@/components/input';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (isLoading)
      return;

    const messagePromise = async () => {
      setIsLoading(true)

      try {
        const data = {
          name,
          email,
          message
        }
  
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const {status} = await res.json();
  
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

  return <div className='bg-main-1 w-full px-4 pt-12 pb-24 md:py-40'>
    <div className='px-6 py-12 bg-white rounded-lg w-full m-auto max-w-md'>
      <form onSubmit={handleSubmit}>
        <Input label='Nombre' placeholder='Juan Perez' onChange={({target: {value}}) => setName(value)}/>
        <Input label='Correo' type='email' placeholder='juan@domain.com' onChange={({target: {value}}) => setEmail(value)}/>
        <Input label='Mensaje' type='textarea' onChange={({target: {value}}) => setMessage(value)}/>
        <button className='bg-main-1 text-white w-full py-3 rounded-full' disabled={isLoading}>Enviar</button>
      </form>
    </div>
  </div>
}