import { createApi } from 'unsplash-js';

const api = createApi({
	accessKey: process.env.UNSPLASH_API_KEY,
	//accessKey: process.env.UNSPLASH_KEY
});

export async function GET(request) {
	const searchParams = request.nextUrl.searchParams;
	const page = searchParams.get('page') || '1';
	const query = searchParams.get('q');

	if (!query) {
		return new Response('Query not defined', {
			status: 401,
		});
	}

	const photos = await api.search.getPhotos({
		query,
		page: Number.parseInt(page),
		perPage: 20,
	});

	if (!photos.response) {
		return new Response('No images found', {
			status: 404,
		});
	}

	const mapped = photos.response.results.map((e) => {
		return {
			url: e.urls.regular,
			thumbnail: e.urls.thumb,
			raw: e.urls.raw,
			width: e.width,
			height: e.height,
			color: e.color,
			download: e.links.download_location,
			user: {
				name: e.user.name,
				profile: `${e.user.links.html}?utm_source=lettercms&utm_medium=referral`, //Unsplash attribution. See https://help.unsplash.com/api-guidelines/unsplash-api-guidelines
			},
		};
	});

	return Response.json(mapped);
}
