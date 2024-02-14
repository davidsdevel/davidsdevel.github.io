import Input from '@/components/input';

export default function Contact() {
  return <div className='bg-main-1 w-full px-4 pt-12 pb-24 md:py-40'>
    <div className='px-6 py-12 bg-white rounded-lg w-full m-auto max-w-md'>
      <form>
        <Input label='Nombre'/>
        <Input label='Correo' type='email'/>
        <Input label='Mensaje' type='textarea'/>
        <button className='bg-main-1 text-white w-full py-3 rounded-full'>Enviar</button>
      </form>
    </div>
  </div>
}