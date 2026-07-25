import FadeIn from '@/app/_ui/fadeIn'
import LazyContactForm from '@/app/_ui/lazyContactForm'

export default function Contact() {
  return <div className='bg-main-1 w-full px-4 pt-12 pb-24 md:py-40'>
    <FadeIn>
      <div className='px-6 py-12 bg-white rounded-lg w-full m-auto max-w-md'>
        <LazyContactForm
          eventForm='About CTA'
        />
      </div>
    </FadeIn>
  </div>
}
