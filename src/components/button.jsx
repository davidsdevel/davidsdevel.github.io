export default function Button({children, className='', ...props}) {
  const _className = `py-3 w-full bg-main-1 text-white rounded-full hover:bg-white hover:text-main-1 ${className}`
  
  return <button className={_className} {...props}>{children}</button>
}