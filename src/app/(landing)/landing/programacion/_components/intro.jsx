import FadeIn from '@/app/_ui/fadeIn'
import StaggerContainer from '@/app/_ui/staggerContainer'
import { Brain, Briefcase, Sparkles, Code } from 'lucide-react'

const reasons = [
  {
    icon: Brain,
    title: 'Desarrolla lógica y pensamiento crítico',
    text: 'Aprender a programar te entrena para resolver problemas de forma estructurada, descomponer situaciones complejas en pasos simples y tomar mejores decisiones en cualquier área de tu vida.',
  },
  {
    icon: Briefcase,
    title: 'Carrera profesional con alta demanda',
    text: 'Los desarrolladores están entre los profesionales mejor remunerados del mundo. Dominar los fundamentos te da acceso a industrias como tecnología, salud, finanzas y más.',
  },
  {
    icon: Sparkles,
    title: 'Crea lo que imagines',
    text: 'Desde apps móviles hasta videojuegos, sitios web o sistemas inteligentes: la programación te da el poder de convertir tus ideas en productos reales que pueden impactar a millones de personas.',
  },
]

export default function Intro() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-main-1 mb-6">
              ¿Por qué aprender <span className="text-curso-purple">programación</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              La programación es la habilidad más poderosa del siglo XXI. No importa si quieres ser desarrollador,
              ingeniero, diseñador o emprendedor: entender cómo funciona la lógica detrás de una computadora
              te abrirá puertas que no imaginabas. En este curso aprenderás las bases que todo programador
              necesita, sin importar el lenguaje que elijas más adelante.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-purple-50/60 border border-purple-100 hover:border-curso-purple/20 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lettercms-1 to-curso-purple flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-main-1 mb-3">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
