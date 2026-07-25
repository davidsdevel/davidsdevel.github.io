'use client'

import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import("@/app/_ui/contactForm"), { ssr: false })

export default function LazyContactForm(props) {
  return <ContactForm {...props} />
}
