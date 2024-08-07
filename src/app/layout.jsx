import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import './global.css';

export default function RootLayout({children}) {
  return <html lang="en">
    <body>
      <main>{children}</main>
      <div className='relative'>
        <Footer/>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </body>
    <GoogleAnalytics gaId="G-0TQ1YHVV3Y" />
  </html>
}