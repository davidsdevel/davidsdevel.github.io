import jwt from 'jsonwebtoken'

export default async function request(path) {
    const token = jwt.sign({
        blog: process.env.LETTERCMS_BLOG_ID
    }, process.env.LETTERCMS_SECRET);

    const response = await fetch(`${process.env.LETTERCMS_API}${path}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}
