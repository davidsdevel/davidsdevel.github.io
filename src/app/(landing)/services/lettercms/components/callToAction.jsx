import { FaSquare } from 'react-icons/fa'
import Container from './container'

export default function CallToAction() {
  return <>
    <div id="details" className="bg-slate-50 py-12">
      <Container className='bg-white m-auto flex flex-col items-center'>
        <div className="text-center max-w-2xl">
          <img className="max-w-md m-auto w-full" src='/illustrations/489.svg' alt="alternative"/>
          <h3 className='mt-8 font-bold text-2xl text-lettercms-1'>It&apos;s time to improve your content creation</h3>
          <p className='my-12'>Our goal is for you to grow and deliver your content in the best possible way. With LetterCMS you won&apos;t have to add plugins or use external tools, we offer everything in one place.</p>
          <ul className='mb-12'>
            <li className="flex text-left items-center gap-2">
              <FaSquare className='text-lettercms-1 w-2 h-2'/>
              <div>Attract new readers and offer them quality</div>
            </li>
            <li className="flex text-left items-center gap-2">
              <FaSquare className='text-lettercms-1 w-2 h-2'/>
              <div>Create and collab more efficiently</div>
            </li>
          </ul>
          <a className='no-underline bg-lettercms-1 text-white rounded-full py-3 px-6' href='https://lettercms.davidsdevel.com/signup'>
            REGISTER
          </a>
        </div>
      </Container>
      
    </div>
    <svg class="bg-slate-50"  data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 79">
      <path fill="#5f4def" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)"/>
    </svg>
  </> 
}
