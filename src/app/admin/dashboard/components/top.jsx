'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function LayoutTop() {
	const router = useRouter();

	const logout = async () => {
		await signOut({ redirect: '/admin' });

		router.refresh();
	};

	return <div className="bg-white flex items-center justify-between py-4 px-8 border-b border-b-slate-200 ">
    	<div className="w-16 h-8 relative">
    		<Link href="/">
    			Inicio
    		</Link>
    	</div>
    	<div className="flex items-center">
            <button onClick={logout}>Logout</button>
    		<div />
    	</div>
    </div>
}
