import Nav from '@/components/nav';
import Footer from '@/components/footer';
import './global.css';

export default function RootLayout({children}) {
  return <html lang="en">
    <body>
      <main>{children}</main>
      <div className='relative'>
        <Footer/>
      </div>
    </body>
  </html>
}