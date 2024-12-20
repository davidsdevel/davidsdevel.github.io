import Input from '@/components/input';
import { useEffect, useState } from 'react';
import NoImage from './noImages';
import List from './list';
import Load from './load';

export default function Search({ onSelect }) {
	const [lastQuery, setLastQuery] = useState(null);
	const [searchQuery, setSearchQuery] = useState(null);
	const [query, setQuery] = useState('');
	const [images, setImages] = useState([]);
	const [isLoading, setLoadState] = useState(false);
	const [isLoadingMore, setLoadMore] = useState(false);
	const [nextPage, setNextPage] = useState(1);
	const [actualPage, setActualPage] = useState(1);

	useEffect(() => {
		if (searchQuery !== lastQuery) {
			setLoadState(true);

			fetch(`/api/unsplash/search?q=${searchQuery}&page=1`)
				.then((r) => r.json())
				.then((img) => {
					setImages(img);
					setLoadState(false);
					setLastQuery(searchQuery);
				});
		}
	}, [searchQuery, lastQuery]);

	useEffect(() => {
		if (actualPage !== nextPage && nextPage !== 1) {
			setLoadMore(true);

			fetch(`/api/unsplash/search?q=${searchQuery}&page=${nextPage}`)
				.then((r) => r.json())
				.then((img) => {
					setImages((prev) => prev.concat(img));
					setLoadMore(false);
					setActualPage(nextPage);
				});
		}
	}, [actualPage, nextPage, searchQuery]);

	let ui = null;
	if (isLoading) ui = <Load />;

	if (!isLoading && images.length > 0)
		ui = (
			<List
				onSelect={onSelect}
				images={images}
				onLoadMore={() => setNextPage(nextPage + 1)}
				isLoadingMore={isLoadingMore}
			/>
		);

	if (!isLoading && images.length === 0) ui = <NoImage />;

	return (
		<div className="flex flex-col items-center">
			<div className="flex">
				<Input
					disabled={isLoading}
					id="search"
					value={query}
					onKeyUp={({ key, target: { value } }) => {
						if (key === 'Enter' && !isLoading && query !== lastQuery) {
							setNextPage(1);
							setSearchQuery(value);
						}
					}}
					onInput={({ target: { value } }) => setQuery(value)}
					label={'Search query'}
				/>
			</div>
			<hr className="w-full my-4" />
			<div className="w-full">{ui}</div>
		</div>
	);
}
