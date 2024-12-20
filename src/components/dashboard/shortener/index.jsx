import Button from '@/components/button'

const data  = [
    {
        id: '1',
        title: 'Instagram',
        slug: 'instagram',
        url: 'https://instagram.com/davidsdevel',
        clicks: 12
    }
]

export default function Shortener() {
    return <div className='p-4'>
        <div>
            <Button className='bg-accent-1 w-32'>New</Button>
        </div>
        <ul className='w-full grid mt-4 gap-4 grid-cols-1 md:grid-cols-2'>
            {
                data.map(e => {
                    return <li key={e.id} className='flex items-center'>
                        <div className='bg-accent-1 rounded-lg w-24 h-24'></div>
                        <div className='flex-grow px-2'>
                            <div className='text-3xl font-bold'>{e.title}</div>
                            <div>{e.slug}</div>
                            <div>{e.url}</div>
                        </div>
                        <div>
                            <button>Delete</button>
                            <div>{e.clicks}</div>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
}