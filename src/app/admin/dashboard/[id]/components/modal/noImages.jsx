export default function NoImages() {
	return (
		<div className="flex flex-col items-center w-full py-8">
			<img
				className="max-h-40"
				src="https://cdn.jsdelivr.net/gh/davidsdevel/lettercms-cdn/public/assets/no-images.svg"
				alt=""
			/>
			<span className="text-sm text-center">No images available</span>
		</div>
	);
}
