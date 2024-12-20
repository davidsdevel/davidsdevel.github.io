import { useEffect, useRef } from 'react';
import { CiCircleMinus } from 'react-icons/ci';

export default function Modal({
	children,
	className = '',
	isOpened,
	onClose,
	w = '720px',
}) {
	const modalRef = useRef(null);

	useEffect(() => {
		if (modalRef.current) {
			if (isOpened) {
				modalRef.current.style.display = 'flex';

				setTimeout(() => {
					if (modalRef.current) {
						modalRef.current.style.opacity = '1';
					}
				}, 0);
			} else {
				modalRef.current.style.opacity = '0';

				setTimeout(() => {
					if (modalRef.current) {
						modalRef.current.style.display = 'none';
					}
				}, 300);
			}
		}
	}, [isOpened]);

	return (
		<div
			ref={modalRef}
			className="fixed top-0 left-0 z-30 w-full h-screen bg-[#000d] hidden opacity-0 items-center justify-center animation-all duration-300 ease"
		>
			<div
				className={`bg-white p-4 rounded-xl relative flex flex-col w-full max-w-4xl max-h-[80vh] ${className}`}
				style={{ width: w }}
			>
				<div className="w-full flex justify-end mb-4">
					<button type="button" onClick={onClose}>
						<CiCircleMinus className="w-6 h-6" />
					</button>
				</div>
				<div className="flex-grow overflow-y-auto">{children}</div>
			</div>
		</div>
	);
}
