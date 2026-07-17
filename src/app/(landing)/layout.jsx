import Nav from '@/app/(landing)/_components/layout/nav';
import Footer from '@/app/(landing)/_components/layout/footer';
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
