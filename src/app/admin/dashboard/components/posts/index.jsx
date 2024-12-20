'use client';

import List from './listContainer';
import Top from './top';

export default function Posts({ data, meta }) {
	return (
		<div className="relative w-full min-h-full flex flex-col">
			<Top />
			<List data={data} meta={meta} />
		</div>
	);
}
