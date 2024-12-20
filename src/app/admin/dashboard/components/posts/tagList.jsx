import { useEffect, useRef } from 'react';

export default function TagList({ tags }) {
	const r = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			r.current.style.opacity = 1;
		}, 0);
	}, []);

	return (
		<div ref={r}>
			<ul>
				{tags.map((e) => (
					<li className={`border border-main-500`} key={e}>
						{e}
					</li>
				))}
			</ul>
		</div>
	);
}
