export default function About() {
  return <section id="about" className='bg-main-1 pt-20 pb-40 text-white'>
      <div className="w-full flex justify-center">
        <span className='text-4xl font-bold'>Acerca de mi</span>
      </div>
      <div>
        <div className='w-full flex flex-col items-center py-12'>
          <h3 className='px-2 text-center text-lg md:w-1/2'>
            Soy un joven Venezolano desarrollador FullStack Javascript, principalmente con las tecnologias: ReactJS, MongoDB, NodeJS. Apasionado por lo que hago, autodidacta y emprendedor. Amante del marketing, ventas y diseño. Creador de LetterCMS, proyecto con el cual practiqué todo lo aprendido. Con este proyecto tengo la vision de mejorar la manera en que los pequeños creadores de contenido planifican, crean, promocionan y entregan su contenido, ofreciendo una experiencia de calidad tanto para creadores como para el usuario final
          </h3>
        </div>
        <div className="w-full flex flex-col items-center px-2 py-12 md:py-40 md:flex-row md:px-24">
          <img src='/assets/details-computer.svg' alt='' className="w-full md:w-1/2" />
          <p className="py-4 text-center text-lg w-full md:w-1/2 md:px-12">
            Empecé mis estudios de programación en el año 2017, estudiando de manera autodidacta. Mi mayor experiencia es desarrollando software de manera personal, creando y probando ideas, LetterCMS naci&oacute; de una de esas ideas. en 2023 trabajé un par de meses en una empresa como interno a tiempo parcial. Luego comencé a trabajar de manera autonoma desarrollando un proyecto de gestión de condominios, el cual actualmente sigo manteniendo y agregando nuevas caracteristicas  
          </p>
        </div>
      </div>
    </section>
}