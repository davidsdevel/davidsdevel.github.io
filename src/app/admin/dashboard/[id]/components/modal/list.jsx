import Button from '@/components/button';
import { useEffect, useState } from 'react';
import Modal from './imageModal';

export default function ImageList({
	images,
	isUploading,
	onLoadMore,
	isLoadingMore,
	onSelect,
}) {
	const [isLoading, setLoad] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [meta, setMeta] = useState({});
	const [selectedImage, setSelectedImage] = useState({});
	const [actualIndex, setActualIndex] = useState(0);

	useEffect(() => {
		setLoad(false);
	}, [images]);

	return (
		<ul className="w-full overflow-x-hidden p-2 gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
			{isUploading && (
				<li id="upload">
					<img
						alt="Asset"
						src="https://cdn.jsdelivr.net/gh/davidsdevel/lettercms-cdn/public/assets/spinner.svg"
						className="rotating"
					/>
				</li>
			)}
			{/*
      images.map((e, i) => <li key={e.url}>
        <img src={e.thumbnail}/>
      </li>)
    */}
			{images.map((e, i) => (
				<li
					key={e.url}
					className="h-40 cursor-pointer rounded-xl hover:scale-105 transition-all duration-150 ease bg-center bg-cover"
					style={{
						backgroundImage: `url(${e.thumbnail || e.url}&w=250)`,
					}}
					onClick={() => {
						setMeta({
							raw: e.raw || e.url,
							user: e.user?.name,
							href: e.user?.profile,
							download: e.download,
							width: e.width,
							height: e.height,
						});
						setSelectedImage(e.url);
						setActualIndex(i);
						setShowModal(true);
					}}
				/>
			))}
			{isLoadingMore && (
				<li id="upload">
					<img
						alt="Asset"
						src="https://cdn.jsdelivr.net/gh/davidsdevel/lettercms-cdn/public/assets/spinner.svg"
						className="rotating"
					/>
				</li>
			)}
			<div className="flex justify-center col-span-2 sm:col-span-3 md:col-span-4">
				<Button
					className="border border-main-500 text-main-500"
					loading={isLoading}
					onClick={onLoadMore}
				>
					Load more
				</Button>
			</div>
			{showModal && (
				<Modal
					show={showModal}
					img={images[actualIndex].url}
					onNext={() => setActualIndex(actualIndex + 1)}
					onPrev={() => setActualIndex(actualIndex - 1)}
					actualIndex={actualIndex}
					imagesLength={images.length}
					meta={meta}
					onClose={() => {
						setShowModal(false);
						setSelectedImage('');
						setMeta({});
					}}
					onSelect={onSelect}
				/>
			)}
		</ul>
	);
}
