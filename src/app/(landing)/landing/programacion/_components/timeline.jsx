import TimelineCard from './timelineCard'
import FadeIn from '@/app/_ui/fadeIn'
import StaggerContainer from '@/app/_ui/staggerContainer'
import { Code, Box, GitBranch, Repeat, Workflow, Layers } from 'lucide-react'

const modules = [
  {
    number: 1,
    title: 'Programación y lógica',
    description: 'La programación es la manera en que le damos instrucciones a una computadora a través de un lenguaje similar al humano. Cada lenguaje tiene su propia sintaxis, pero los fundamentos y la lógica son los mismos en todos. Aprenderemos a pensar como una computadora: recibir, procesar y producir resultados paso a paso.',
    icon: Code,
  },
  {
    number: 2,
    title: '¿Qué son variables?',
    description: 'Son espacios en memoria donde se guarda un valor que puede cambiar durante la ejecución del programa. Podemos verlo como una caja etiquetada donde guardamos cosas para usarlas después. Las variables pueden contener distintos tipos de datos: texto (strings), números (integers/floats), valores verdadero o falso (booleans) y mucho más.',
    codeExample: 'nombre = "David"   |   edad = 26   |   activo = True',
    icon: Box,
  },
  {
    number: 3,
    title: '¿Qué son condicionales?',
    description: 'Son las decisiones que toma nuestro código para ejecutar una u otra acción dependiendo de una condición. Usamos palabras clave como if, else y else if para decirle a la computadora: "si esto es verdadero, haz esto; si no, haz aquello". Son la base de la lógica en cualquier programa.',
    codeExample: 'if llueve:\n    quedarse_dormir()\nelse:\n    salir_paseo()',
    icon: GitBranch,
  },
  {
    number: 4,
    title: '¿Qué son bucles?',
    description: 'Son bloques de código que se repiten automáticamente mientras se cumpla una condición. El bucle "for" se usa cuando sabemos cuántas veces queremos repetir algo (por ejemplo, recorrer una lista). El bucle "while" se usa cuando queremos que algo se repita hasta que ocurra algo específico, sin saber de antemano cuántas veces será.',
    codeExample: 'for i in range(5):\n    print("Iteración", i)',
    icon: Repeat,
  },
  {
    number: 5,
    title: '¿Qué son funciones?',
    description: 'Son una serie de pasos agrupados bajo un nombre que podemos reutilizar cuantas veces necesitemos. En lugar de escribir el mismo código una y otra vez, lo encapsulamos en una función y la llamamos por su nombre. Pueden recibir datos de entrada (parámetros) y devolver un resultado (return value), haciendo el código más limpio, organizado y fácil de mantener.',
    codeExample: 'def calcular_promedio(notas):\n    return sum(notas) / len(notas)',
    icon: Workflow,
  },
  {
    number: 6,
    title: 'Fundamentos y aplicabilidad',
    description: 'Estos conceptos no dependen de ningún lenguaje en particular. Si aprendes lógica, variables, condicionales, bucles y funciones, podrás programar en C/C++, Go, C#, Python, JavaScript/TypeScript, Kotlin o cualquier otro lenguaje. Son como las bases de una carrera: sin importar en qué dirección vayas, siempre partirás de aquí.',
    icon: Layers,
  },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-main-1 mb-4">
              Temario del Curso
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-gray-500 text-lg">
              6 módulos para que domines las bases de la programación
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lettercms-1 to-curso-purple -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lettercms-1 to-curso-purple md:hidden" />

          <StaggerContainer className="space-y-8 md:space-y-12">
            {modules.map((mod, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={mod.number} className="relative flex items-start">
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-curso-purple border-4 border-purple-50 -translate-x-1/2 z-10 mt-6" />

                  <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <TimelineCard {...mod} direction={isLeft ? 'left' : 'right'} />
                  </div>
                </div>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
