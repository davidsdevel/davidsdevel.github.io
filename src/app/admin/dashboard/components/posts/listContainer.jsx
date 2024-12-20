'use client';

import Button from '@/components/button';
import {
	usePathname,
	useRouter,
	useSearchParams
} from 'next/navigation';
import Card from './card';

export default function ListContainer({ data, meta }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const changePage = (page) => {
		const status = searchParams.get('status');

		let path = `${pathname}?page=${page}`;

		if (status) {
			path += `&status=${status}`;
		}

		router.push(path);
	};

	if (data?.length === 0) {
		return 'No posts...';
	}

	return (
		<div className="p-4 sm:gap-4 md:p-8">
			<ul className="w-full grid gap-2 grid-cols-1 mb-4 sm:gap-4 md:mb-8 sm:grid-cols-2">
				{data.map((e) => {
					return (
						<Card
							key={e.id}
							{...e}
						/>
					);
				})}
			</ul>
			<div className="w-full flex justify-between">
				{meta.prev ? (
					<Button
						className="border border-main-500 text-main-500"
						onClick={() => changePage(meta.prev)}
					>
						Prev Page
					</Button>
				) : (
					<div />
				)}
				{meta.next ? (
					<Button
						className="border border-main-500 text-main-500"
						onClick={() => changePage(meta.next)}
					>
						Next Page
					</Button>
				) : (
					<div />
				)}
			</div>

		</div>
	);
}
