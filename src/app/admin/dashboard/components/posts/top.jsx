'use client';

import Button from '@/components/button';
import {
	usePathname,
	useRouter,
	useSearchParams,
} from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPost } from '../../actions';

export default function Top() {
	const prevScrollY = useRef(0);
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const status = searchParams.get('status');

	const filter = (status) => {
		if (!status) {
			router.push(`${pathname}`);
		} else {
			router.push(`${pathname}?status=${status}`);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (prevScrollY.current > 200 && !isOpen) {
				setOpen(true);
			}
			if (prevScrollY.current < 200 && isOpen) {
				setOpen(false);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, [isOpen]);

	return <div>
		<div className="w-full flex items-center justify-between py-4 px-8 bg-gray-100">
			<div>
				<Button
					className={'bg-accent-1 w-24 px-4 '}
					onClick={() => {
						createPost();
					}}
				>
					Create Post
				</Button>
			</div>
			<div className="flex max-w-4xl gap-4">
				<Button
					className=" px-4 bg-white text-main-1 disabled:bg-main-1 disabled:text-white"
					disabled={!status}
					onClick={() => filter()}
				>
					All
				</Button>
				<Button
					className=" px-4 bg-white text-main-1 disabled:bg-main-1 disabled:text-white"
					disabled={status === 'PUBLISHED'}
					onClick={() => filter('PUBLISHED')}
				>
					Published
				</Button>
				<Button
					className=" px-4 bg-white text-main-1 disabled:bg-main-1 disabled:text-white"
					disabled={status === 'DRAFTED'}
					onClick={() => filter('DRAFTED')}
				>
					Drafted
				</Button>
			</div>
		</div>
	</div>
}
