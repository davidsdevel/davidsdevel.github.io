import { FaSquare } from 'react-icons/fa'
import Container from './container'

export default function CallToAction() {
  return <div id="details" className="bg-slate-50 py-12">
    <Container className='bg-white m-auto flex flex-col items-center'>
      <div className="text-center max-w-2xl">
        <img className="max-w-md m-auto w-full" src='/illustrations/489.svg' alt="alternative"/>
        <h3 className='mt-8 font-bold text-2xl text-main-1'>It&apos;s time to improve your content creation</h3>
        <p className='my-12'>Our goal is for you to grow and deliver your content in the best possible way. With LetterCMS you won&apos;t have to add plugins or use external tools, we offer everything in one place.</p>
        <ul className='mb-12'>
          <li className="flex text-left items-center gap-2">
            <FaSquare className='text-accent-1 w-2 h-2'/>
            <div>Attract new readers and offer them quality</div>
          </li>
          <li className="flex text-left items-center gap-2">
            <FaSquare className='text-accent-1 w-2 h-2'/>
            <div>Create and collab more efficiently</div>
          </li>
        </ul>
        <a className='no-underline bg-accent-1 text-white rounded-full py-3 px-6' href='https://lettercms.davidsdevel.site/signup'>
          REGISTER
        </a>
      </div>
    </Container>
  </div>
}
