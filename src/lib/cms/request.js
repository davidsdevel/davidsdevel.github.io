import jwt from 'jsonwebtoken'

let cachedToken = null;
let cachedTokenExpiry = 0;

function getToken() {
    const now = Date.now();
    if (cachedToken && now < cachedTokenExpiry) {
        return cachedToken;
    }

    cachedToken = jwt.sign({
        blog: process.env.LETTERCMS_BLOG_ID
    }, process.env.LETTERCMS_SECRET, { expiresIn: '1h' });

    cachedTokenExpiry = now + 55 * 60 * 1000;
    return cachedToken;
}

export default async function request(path) {
    try {
        const token = getToken();

        const response = await fetch(`${process.env.LETTERCMS_API}/v1${path}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch {
        return null;
    }
}
