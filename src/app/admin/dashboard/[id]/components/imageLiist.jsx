import { CiCircleCheck } from 'react-icons/ci';

export default function ImageList({ images, thumbnail, setThumbnail }) {
	return (
		<div className=" flex flex-col py-8">
			<span className="text-center text-sm">Select a thumbnail</span>
			<ul className="grid grid-cols-2">
				{images.length > 0 ? (
					images.map((e) => {
						return (
							<li
								key={e}
								className={`relative rounded-xl border overflow-hidden border-slate-100 bg-center bg-cover h-32 ${e === thumbnail ? '' : 'cursor-pointer hover:shadow hover:shadow-gray-200'}`}
								onClick={() => setThumbnail(e)}
								style={{ backgroundImage: `url(${e}&w=200&q=50)` }}
							>
								{e === thumbnail && (
									<div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
										<CiCircleCheck className="w-12 h-12 text-white" />
									</div>
								)}
							</li>
						);
					})
				) : (
					<div className="flex flex-col items-center w-full justify-center py-8 m-auto col-span-2">
						<span className="text-center text-lg">There are no images on this post</span>
					</div>
				)}
			</ul>
		</div>
	);
}
