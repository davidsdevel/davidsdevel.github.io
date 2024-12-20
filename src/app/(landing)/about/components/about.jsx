export default function About() {
  return <section id="about" className='bg-main-1 pt-20 pb-40 text-white'>
      <div className="w-full flex justify-center">
        <span className='text-4xl font-bold'>Acerca de mi</span>
      </div>
      <div>
        <div className='w-full flex flex-col items-center py-12'>
          <h3 className='px-2 text-center text-lg md:w-1/2'>
            Soy un joven Venezolano desarrollador de software amante del marketing, ventas y el diseño, apasionado por lo que hago, autodidacta y emprendedor
          </h3>
        </div>
        <div className="w-full flex flex-col items-center px-2 py-12 md:py-40 md:flex-row md:px-24">
          <img src='/assets/details-computer.svg' alt='' className="w-full md:w-1/2" />
          <p className="py-4 text-center text-lg w-full md:w-1/2 md:px-12">
            Empecé mis estudios en programación en el año 2017, estudiando de manera autodidacta. En 2023 trabajé para una empresa como desarrollador FullStack. Luego comencé a trabajar de manera autonoma con el cual he desarrolado algunos sistemas
          </p>
        </div>
        <div className="w-full flex flex-col items-center px-2 py-12 md:py-40 md:flex-row md:px-24">
          <p className="py-4 text-center text-lg w-full md:w-1/2 md:px-12">
            Con el tiempo empecé a estudiar marketing y ventas, especialmente con la metodologia Inbound certificandome en modelos de negocios en HubSpot Academy
          </p>
          <img src='/assets/details-computer.svg' alt='' className="w-full md:w-1/2" />
        </div>
      </div>
    </section>
}