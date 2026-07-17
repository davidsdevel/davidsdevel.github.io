import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

const title = "David's Devel - Desarrollador Full Stack & Marketing Digital";
const description = 'Desarrollador Full Stack e Inbound Marketer. Soluciones digitales para el crecimiento de tu negocio.';

export const metadata = {
  
  metadataBase: new URL('https://www.davidsdevel.com'),
  title,
  description,
  icons: ['https://www.davidsdevel.com/favicon.ico'],
  openGraph: {
    title,
    description,
    siteName: title,
    locale: 'es_LA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@davidsdevel',
  },
  authors: [
    {
      name: "David's Devel",
      url: 'https://www.davidsdevel.com/about'
    }
  ],
  generator: 'Next.js',
  creator: "David's Devel",
  publisher: "David's Devel",
  
  facebook: {
    admins: '12345678',
  },
  category: 'marketing'
}

export default function RootLayout({children}) {
  return <html lang="es">
    <body>
      <main>{children}</main>
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
  </html>
}
