'use client'

import Modal from '@/components/modal';
import BlogSearch from './search';

const generateUnsplashSrc = (raw, width) => {
	return {
		width,
		class: 'image',
		src: `${raw}&w=100`,
		'data-src': raw,
		srcset: `${raw}&w=480&q=40 480w, ${raw}&w=720&q=50 720w, ${raw}&w=1024&q=75 1024w, ${raw}&w=2048&q=75 1400w`,
	};
};

export default function ImagesModal({ onClose, show, editor, onAddImage }) {
	const appendUnsplash = ({ raw, user, href, download, width, height }) => {
		const src = generateUnsplashSrc(raw, width, height);

		editor.execute('unsplash', {
			user,
			href,
			src,
			download,
		});

        onAddImage(raw)

		onClose();
	};

	return <Modal isOpened={show} onClose={onClose}>
		<BlogSearch onSelect={appendUnsplash} />
	</Modal>
}
