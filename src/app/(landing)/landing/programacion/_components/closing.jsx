import Button from '@/app/_ui/button'
import FadeIn from '@/app/_ui/fadeIn'
import { GraduationCap } from 'lucide-react'
import Link from 'next/link'

const CLASSROOM_URL = 'https://classroom.google.com/c/Nzk4MDM5NjczODE5?cjc=jq6dsupd'

export default function Closing() {
  return (
    <section className="relative bg-gradient-to-br from-lettercms-2 via-lettercms-1 to-curso-purple text-white py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-[#fcfaff]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0% 100%)' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            ¡Comienza tu camino en el desarrollo de software hoy mismo!
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-purple-100 mb-10 max-w-xl mx-auto">
            Únete al classroom y accede a todo el contenido del curso de forma gratuita.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a href={CLASSROOM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-lettercms-1 font-semibold text-lg hover:bg-purple-50 transition-colors w-max inline-flex items-center gap-3 mx-auto px-10 py-4">
              <GraduationCap className="w-6 h-6" />
              Ir a las clases en Google Classroom
            </Button>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
