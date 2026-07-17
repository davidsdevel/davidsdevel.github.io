'use client'

import cover from './ebook-cover.png'
import me from './me.jpg'
import Image from "next/image"
import Button from "@/components/button"
import Input from "@/components/input"
import { Shield, ShieldCheck, Eye, Wifi, Lock, Mail, KeyRound, Key, AlertCircle, ChevronDown } from "lucide-react"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { z } from "zod/v4";
import { sendGAEvent } from '@next/third-parties/google'
import { sendContactMessage } from 'actions'

const EmailSchema = z.email()

export default function LandingPage() {
  const [email, setEmail] = useState('')

  async function downloadGuide(e) {
    e.preventDefault()

    if (!email) {
      toast.info('Por favor, ingresa tu correo electrónico.')
      return
    }

    const parseEmail = EmailSchema.safeParse(email);
  
    if (!parseEmail.success) {
        toast.info('El correo no es válido');
        return
    }

    await sendContactMessage("Anonimo", email, 'Descargue el ebook "Sobrevive al mundo digital"');

    sendGAEvent('event', 'cibersecurity-download', {
        origin: 'landing-page'
    });
  
    window.open(encodeURI('/ebook/Sobrevive al mundo digital Claves para evitar hackeos.pdf'), '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-main-1 to-main-2 text-white py-48 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                ¿Tu vida digital está segura? Sobrevive al Mundo Digital.
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Descarga esta guía gratuita y aprende las claves esenciales para evitar hackeos y proteger tu
                información personal en línea.
              </p>
              <a href="#download-form">
                <Button className="bg-accent-1 mt-4 hover:opacity-80 text-white text-lg font-medium transition-all">
                  ¡Descargar Guía Gratis Ahora!
                </Button>
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-80 md:h-96 shadow-2xl transform rotate-3 transition-transform hover:rotate-0">
                <Image
                  src={cover}
                  alt="Portada del ebook: Sobrevive al mundo digital"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
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
          <h2 className="text-3xl md:text-4xl mb-6 text-main-1">
            La ciberseguridad es fundamental en un mundo cada vez más digitalizado.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Protege tu información personal, financiera y profesional de ataques que pueden comprometer tus datos y tu
            reputación. Este ebook te enseña cómo hacerlo con pasos sencillos y prácticos.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="#download-form" className="flex items-center text-accent-1 font-medium">
              <span>Descubre cómo protegerte</span>
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-main-1">
            Lo que descubrirás en esta guía:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Conoce al Autor</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-2 border-accent-1 shadow-lg">
              <Image src={me} alt="David Gonzalez" fill className="object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-accent-1">David Gonzalez</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy David, un joven venezolano, desarrollador de software y docente. Apasionado por el marketing y el
                diseño, comencé a programar de forma autodidacta en 2017. Actualmente me encuentro en formación como
                analista de ciberseguridad (junio 2025) y he obtenido certificaciones en Marketing Inbound de HubSpot
                Academy. También soy profesor en la Academia internacional de programación Algorithmics en
                Valencia, Venezuela. Mi objetivo es darte el conocimiento para que navegues seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section
        id="download-form"
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-main-1 to-main-2 "
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Estás listo para asumir el control de tu seguridad en línea?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ingresa tu correo electrónico para recibir tu copia gratuita del ebook &quot;Sobrevive al mundo digital&quot;.
          </p>
          <form className="space-y-4" onSubmit={downloadGuide}>
            <div className="flex flex-col items-center sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className='py-3 px-6'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Button
                type="submit"
                className="bg-accent-1 hover:opacity-80 text-white font-medium transition-all mt-2"
              >
                ¡Descargar la Guía!
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">Respetamos tu privacidad. No te enviaremos spam.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
