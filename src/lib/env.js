const requiredEnvVars = [
    'DATABASE_URL',
    'DIRECT_URL',
    'LETTERCMS_API',
    'LETTERCMS_SECRET',
    'LETTERCMS_BLOG_ID',
    'WHATSAPP_NUMBER',
];

const missing = requiredEnvVars.filter(key => !process.env[key]);

if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
}
