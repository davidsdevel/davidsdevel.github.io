export default function Footer() {
  const date = new Date();

  return <footer id="footer-copyright" className='absolute bottom-0 px-12 w-full'>
    <div className="bg-black-3 rounded-tr-lg rounded-tl-lg w-full text-white py-4 flex flex-col items-center">
      <span>David&apos;s Devel &copy; {date.getFullYear()}</span>
    </div>
  </footer>
}