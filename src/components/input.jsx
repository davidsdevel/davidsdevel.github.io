export function Input({id, type, label, className = '', ...props}) {

  let _className = 'w-full ';

  const _type = type || 'text';
  const isTextarea = _type === 'textarea';

  if (_type === 'file')
    _className += ' file:border-none file:h-full file:bg-main-1 file:text-white file:rounded-full file:px-4 file:py-2 text-sm mt-2';
  else
    _className += 'rounded-lg border border-stone-200 mt-2 pr-4 py-2 pl-2 bg-white disabled:bg-stone-200';


  _className = `${_className} ${className}`;

  return <div className='mt-1 w-full'>
    {
      label &&
      <label htmlFor={id} className='text-xs text-stone-600'>{label}</label>
    }
    {
      isTextarea
        ? <textarea className={_className} name={id} id={id} {...props}/>
        : <input className={_className} type={_type} name={id} id={id} {...props}/>
    }
  </div>;
}

export default Input;