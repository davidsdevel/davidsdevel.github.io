export default function Button({children, className='', ...props}) {
  const _className = `py-3 px-6 w-full rounded-full ${className}`
  
  return <button className={_className} {...props}>{children}</button>
}