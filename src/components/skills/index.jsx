import {CiMonitor, CiServer, CiViewList} from 'react-icons/ci';
import { RiFlowChart } from "react-icons/ri";

const skills = [
  {
    name: 'Front-End',
    ico: <CiMonitor className='text-white w-12 h-12'/>,
    description: 'Tecnologias de desarrollo Front-End',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'NextJS',
      'RemixJS'
    ]
  },
  {
    name: 'Back-End',
    ico: <CiServer className='text-white w-12 h-12'/>,
    description: 'Tecnologias de desarrollo Back-end',
    skills: [
      'NodeJS',
      'ExpressJS',
      'Mongoose',
      'RestAPI'
    ]
  },
  {
    name: 'DevOps',
    ico: <RiFlowChart className='text-white w-12 h-12'/>,
    description: 'Servicios de CI/CD',
    skills: [
      'CircleCI',
      'GitHub Actions',
      'GtLab CI'
    ]
  },
  {
    name: 'Otras tecnologias',
    ico: <CiViewList className='text-white w-12 h-12'/>,
    description: 'Otras tecnologias con las que he trabajado en menor medida y he hecho practicas',
    skills: [
      'Python',
      'C#',
      'Unity3D'
    ]
  }
]

export default function Skills() {
  return <section id="skills" className='px-2 -mb-24 md:px-24'>
    <div className='w-full bg-black-3 relative py-12 -top-40 rounded-xl px-4'>
      <div className="section-heading text-center text-white">
        <h3 className='text-xl font-bold py-8'>Habilidades</h3>
      </div>
      <div className='grid grid-cols-1 gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {skills.map((e, i) => {
          return <div key={e.name} className='w-full flex flex-col items-center py-8 border border-gray-500 rounded-lg'>
            <div className='bg-accent-1 p-4 rounded-full'>
              {e.ico}
            </div>
            <h4 className='text-3xl text-white py-4'>{e.name}</h4>
            <ul className='text-white flex flex-wrap w-full justify-around'>
              {
                e.skills.map(skill => {
                  return <li key={skill} className='w-1/2 flex justify-center'>
                    <span>{skill}</span>
                  </li>
                })
              }
            </ul>
          </div>
        })}
      </div>
    </div>
  </section>
}