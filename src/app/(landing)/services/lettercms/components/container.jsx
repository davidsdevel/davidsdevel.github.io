export default function Container({children, className}) {
    return <div className={`w-11/12 rounded-2xl py-12 px-4 my-4 ${className}`}>
        {children}
    </div>
}
