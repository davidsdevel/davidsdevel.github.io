import jwt from 'jsonwebtoken';

const API_KEY = process.env.REVALIDATION_SECRET;

export async function POST(request) {
    const authHeader = request.headers.get('authorization');
    if (!API_KEY || authHeader !== `Bearer ${API_KEY}`) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let blog = process.env.LETTERCMS_BLOG_ID;
    
    try {
        const {subdomain} = await request.json();

        if (subdomain && typeof subdomain === 'string' && /^[a-zA-Z0-9-]+$/.test(subdomain)) {
            const subdomainSecret = jwt.sign({subdomain}, process.env.LETTERCMS_SECRET, {expiresIn: '1h'});
            
            const data = await fetch(`${process.env.LETTERCMS_API}/blogs/${encodeURIComponent(subdomain)}?select=id`, {
                headers: {
                    authorization: `Bearer ${subdomainSecret}`
                }
            }).then(res => res.json());

            if (data.id) {
                blog = data.id;
            }
        }
    } catch {}

    const secret = jwt.sign({blog}, process.env.LETTERCMS_SECRET, {expiresIn: '1h'})

    return Response.json({
        secret,
        endpoint: process.env.LETTERCMS_API
    })
}
