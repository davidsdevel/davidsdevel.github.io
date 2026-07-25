import Button from '@/app/_ui/button'
import FadeIn from '@/app/_ui/fadeIn'
import { GraduationCap } from 'lucide-react'

const CLASSROOM_URL = 'https://classroom.google.com/c/Nzk4MDM5NjczODE5?cjc=jq6dsupd'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-lettercms-2 via-lettercms-1 to-curso-purple text-white py-24 px-4 md:px-8 lg:px-16 md:py-40 lg:py-52 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-sm font-medium tracking-wide backdrop-blur-sm">
            Bases
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Fundamentos de Programación
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Descubre cómo darle instrucciones a una computadora y domina la lógica detrás de cualquier lenguaje.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a href={CLASSROOM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-lettercms-1 font-semibold text-lg hover:bg-purple-100 transition-colors w-max inline-flex items-center gap-3 mx-auto">
              <GraduationCap className="w-5 h-5" />
              Ingresar al Google Classroom
            </Button>
          </a>
        </FadeIn>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}
      />
    </section>
  )
}
