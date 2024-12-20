'use client';

import { useRouter } from 'next/navigation';
import { TiDocumentText } from 'react-icons/ti';

const menu = [
	{
		name: 'posts',
		title: 'Posts',
		icon: <TiDocumentText className="text-accent-1 h-6 w-6" />,
		href: '/admin',
	}
];

export default function LayoutNav() {
	const router = useRouter();

	return <div className="bg-white w-52 border-r border-r-slate-100">
        <ul className="my-4 px-2">
            {menu.map((e, i) => {
                return (
                    <li key={e.name + i.toString()}>
                        <button
                            className="px-2 py-3 flex gap-2 w-full items-center rounded-full transition-all duration-150 ease text-main-1 hover:bg-slate-200"
                            onClick={() => router.push(e.href)}
                        >
                            {e.icon}
                            <span>{e.title}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    </div>
}
