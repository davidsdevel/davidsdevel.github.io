'use client'

import cover from '../ebook-cover.png'
import me from '../me.jpg'
import Image from "next/image"
import Button from "@/app/_ui/button"
import ContactForm from "@/app/_ui/contactForm"
import FadeIn from "@/app/_ui/fadeIn"
import StaggerContainer from "@/app/_ui/staggerContainer"
import { Shield, ShieldCheck, Eye, Wifi, Lock, Mail, KeyRound, Key, AlertCircle, ChevronDown } from "lucide-react"

async function downloadGuide(email) {
  await fetch('/api/revalidation/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Anonimo', email, message: 'Descargue el ebook "Sobrevive al mundo digital"' })
  }).catch(() => {});

  window.open(encodeURI('/ebook/Sobrevive al mundo digital Claves para evitar hackeos.pdf'), '_blank')
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-main-1 to-main-2 text-white py-48 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  ¿Tu vida digital está segura? Sobrevive al Mundo Digital.
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-xl md:text-2xl text-blue-100">
                  Descarga esta guía gratuita y aprende las claves esenciales para evitar hackeos y proteger tu
                  información personal en línea.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <a href="#download-form">
                  <Button className="bg-accent-1 mt-4 hover:opacity-80 text-white text-lg font-medium transition-all">
                    ¡Descargar Guía Gratis Ahora!
                  </Button>
                </a>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.2} className="flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-80 md:h-96 shadow-2xl transform rotate-3 transition-transform hover:rotate-0">
                <Image
                  src={cover}
                  alt="Portada del ebook: Sobrevive al mundo digital"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </section>

      {/* Problem/Introduction Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-6 text-main-1">
              La ciberseguridad es fundamental en un mundo cada vez más digitalizado.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xl text-gray-700 leading-relaxed">
              Protege tu información personal, financiera y profesional de ataques que pueden comprometer tus datos y tu
              reputación. Este ebook te enseña cómo hacerlo con pasos sencillos y prácticos.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-10 flex justify-center">
              <a href="#download-form" className="flex items-center text-accent-1 font-medium">
                <span>Descubre cómo protegerte</span>
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center text-main-1">
              Lo que descubrirás en esta guía:
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-accent-1" />,
                title: "Mantener Sistemas Actualizados",
                description:
                  "Por qué las actualizaciones son tu primera línea de defensa contra nuevas vulnerabilidades.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-accent-1" />,
                title: "Instalar un Antivirus",
                description: "Cómo el software antivirus te protege del malware y spyware que busca robar tus datos.",
              },
              {
                icon: <Eye className="h-10 w-10 text-accent-1" />,
                title: "Navegación Privada",
                description: "Usa el modo incógnito para minimizar el rastreo y proteger tu historial de navegación.",
              },
              {
                icon: <Wifi className="h-10 w-10 text-accent-1" />,
                title: "Precauciones en Wi-Fi Públicos",
                description: "Medidas para evitar que los hackers accedan a tu conexión en redes no seguras.",
              },
              {
                icon: <Lock className="h-10 w-10 text-accent-1" />,
                title: "Contraseñas Seguras",
                description: "Aprende a crear y gestionar contraseñas difíciles de adivinar para proteger tus cuentas.",
              },
              {
                icon: <Mail className="h-10 w-10 text-accent-1" />,
                title: "Uso de Correos Temporales",
                description: "Cómo usar correos desechables para evitar el spam y proteger tu email principal.",
              },
              {
                icon: <KeyRound className="h-10 w-10 text-accent-1" />,
                title: "Autenticación en 2 Factores (2FA)",
                description: "Añade una capa extra de seguridad que hace casi imposible que hackeen tus cuentas.",
              },
              {
                icon: <Key className="h-10 w-10 text-accent-1" />,
                title: "Autorización Abierta (OAuth)",
                description: "Entiende cómo das permisos a apps de forma segura sin compartir tu contraseña.",
              },
              {
                icon: <AlertCircle className="h-10 w-10 text-accent-1" />,
                title: "Cuidar la Información Compartida",
                description:
                  "Qué datos nunca debes publicar en redes sociales para evitar el robo de identidad y otros riesgos.",
              },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-accent-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center">Conoce al Autor</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <FadeIn direction="left" className="w-48 h-48 relative rounded-full overflow-hidden border-2 border-accent-1 shadow-lg flex-shrink-0">
              <Image src={me} alt="David Gonzalez" fill className="object-cover" />
            </FadeIn>
            <FadeIn direction="right" delay={0.15} className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-accent-1">David Gonzalez</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy David, un joven venezolano, desarrollador de software y docente. Apasionado por el marketing y el
                diseño, comencé a programar de forma autodidacta en 2017. Actualmente me encuentro en formación como
                analista de ciberseguridad (junio 2025) y he obtenido certificaciones en Marketing Inbound de HubSpot
                Academy. También soy profesor en la Academia internacional de programación Algorithmics en
                Valencia, Venezuela. Mi objetivo es darte el conocimiento para que navegues seguro.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section
        id="download-form"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-main-1 to-main-2 "
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Estás listo para asumir el control de tu seguridad en línea?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl mb-8 text-blue-100">
              Ingresa tu correo electrónico para recibir tu copia gratuita del ebook &quot;Sobrevive al mundo digital&quot;.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-lg mx-auto bg-white rounded-lg p-4">
              <ContactForm
                mode="ebook"
                buttonText="¡Descargar la Guía!"
                eventForm="ebook-download"
                onSubmit={downloadGuide}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-sm text-blue-200 mt-4">Respetamos tu privacidad. No te enviaremos spam.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
