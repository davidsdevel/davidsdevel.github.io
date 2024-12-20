'use client';

import {
	usePathname,
	useRouter,
	useSearchParams
} from 'next/navigation';
import Card from './card';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function ListContainer({ data, meta }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const changePage = page => {
		const params = new URLSearchParams(searchParams);

		params.set('page', page);

		router.push(`${pathname}?${params.toString()}`);
	};

	if (data?.length === 0) {
		return 'No posts...';
	}

	return <div className="p-4 sm:gap-4 md:px-8 md:py-4">
		<div className="w-full flex justify-end gap-2 mb-4 sm:mb-4">
			<button
				className="text-main-1 border border-main-1 rounded-full disabled:text-gray-400 disabled:border-gray-400"
				onClick={() => changePage(meta.previousPage)}
				disabled={!meta.previousPage}
			>
				<BiChevronLeft className='w-10 h-10'/>
			</button>
			<button
				className="text-main-1 border border-main-1 rounded-full disabled:text-gray-400 disabled:border-gray-400"
				onClick={() => changePage(meta.nextPage)}
				disabled={!meta.nextPage}
			>
				<BiChevronRight className='w-10 h-10'/>
			</button>
		</div>
		<ul className="w-full grid gap-2 grid-cols-1 mb-4 sm:gap-4 md:mb-8 sm:grid-cols-2">
			{
				data.map((e) => {
					return <Card key={e.id} {...e} />
				})
			}
		</ul>
	</div>
}
