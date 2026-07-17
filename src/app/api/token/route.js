import jwt from 'jsonwebtoken';

export async function POST(request) {
    const {subdomain} = await request.json();

    let blog = process.env.LETTERCMS_BLOG_ID;
    
    if (subdomain) {
        const subdomainSecret = jwt.sign({subdomain}, process.env.LETTERCMS_SECRET, {expiresIn: '1h'});
        
        const data = await fetch(`${process.env.LETTERCMS_API}/blogs/${subdomain}?select=id`, {
            headers: {
                authorization: `Bearer ${subdomainSecret}`
            }
        }).then(res => res.json());

        blog = data.id;
    }

    const secret = jwt.sign({blog}, process.env.LETTERCMS_SECRET, {expiresIn: '1h'})

    return Response.json({
        secret,
        endpoint: process.env.LETTERCMS_API
    })
}