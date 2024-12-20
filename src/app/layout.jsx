import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

const title = 'Narrate - Notion Style Blogging Platform for SaaS Founders';
const description = 'Easily create Notion-style blogs optimized for SEO and audience engagement.';
const keywords = ['Next.js 14 SEO', 'Notion Styled Blogs', 'Notion to Blogs', 'Narrate blog', 'SEO tips', 'AI blogging'];

export const metadata = {
  
  metadataBase: new URL('https://www.davidsdevel.site'),
  title,
  description,
  icons: ['https://www.davidsdevel.site/favicon.ico'],
  keywords,
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
      url: 'https://www.davidsdevel.site/about'
    }
  ],
  generator: 'Next.js',
  creator: "David's Devel",
  publisher: "David's Devel",
  
  facebook: {
    admins: '12345678',
  },
  category: 'marketing'

  //referrer: 'origin-when-cross-origin',
  //formatDetection: {
  //  email: false,
  //  address: false,
  //  telephone: false,
  //}
}

export default function RootLayout({children}) {
  return <html lang="en">
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