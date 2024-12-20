import { createApi } from 'unsplash-js';

const api = createApi({
	accessKey: process.env.UNSPLASH_API_KEY,
	//accessKey: process.env.UNSPLASH_KEY
});

export async function GET(request) {
	const searchParams = request.nextUrl.searchParams;
	const url = searchParams.get('url');

	if (!url) {
		return new Response('URL not defined', {
			status: 401,
		});
	}

	api.photos.trackDownload({
		downloadLocation: `https://api.unsplash.com/photos${url}`,
	});

	return Response.json({});
}
