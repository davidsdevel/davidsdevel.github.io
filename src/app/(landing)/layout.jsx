import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({children}) {
  return <>
    <Nav/>
    <main>{children}</main>
    <div className='relative'>
      <Footer/>
    </div>
    <GoogleAnalytics gaId="G-0TQ1YHVV3Y" />
  </>
}