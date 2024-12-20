import Button from '@/components/button';
import { useEffect, useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';

export default function ImageModal({
	show,
	img,
	meta,
	onClose,
	onSelect,
	onNext,
	onPrev,
	actualIndex,
	imagesLength,
}) {
	const [opacity, setOpacity] = useState(0);
	const [display, setDisplay] = useState('none');

	const close = () => {
		setOpacity('0');
		setTimeout(() => {
			setDisplay('none');
			onClose();
		}, 610);
	};

	useEffect(() => {
		if (show) {
			setDisplay('flex');
			setTimeout(() => setOpacity('1'), 0);
		}
	}, [show]);

	return (
		<div
			className="top-0 left-0 w-full h-full fixed z-30 flex items-center justify-center bg-[#0005]"
			style={{ opacity, display }}
		>
			<button className="absolute top-8 right-8" onClick={close}>
				<FaTimes className="w-8 h-8 text-white" />
			</button>
			<div className="relative flex flex-col justify-center items-center bg-white p-4 gap-2 rounded-xl h-[80vh] w-[80%]">
				<div className="relative flex items-center max-h-[90%] flex-grow w-full">
					<button onClick={onPrev} disabled={actualIndex === 0}>
						<CiCircleChevLeft className="h-8 w-8" />
					</button>
					<img
						src={img}
						className="object-scale-down max-h-full m-auto rounded-lg"
					/>
					<button onClick={onNext} disabled={actualIndex === imagesLength - 1}>
						<CiCircleChevRight className="h-8 w-8" />
					</button>
				</div>
				<Button className="bg-main-500 w-fit" onClick={() => onSelect(meta)}>
					Select
				</Button>
			</div>
		</div>
	);
}
