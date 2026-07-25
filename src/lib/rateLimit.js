const rateLimitStore = new Map();

export function checkRateLimit(key, { maxRequests = 60, windowMs = 60000 } = {}) {
    const now = Date.now();
    const record = rateLimitStore.get(key);

    if (!record || now - record.start > windowMs) {
        rateLimitStore.set(key, { start: now, count: 1 });
        return { allowed: true, remaining: maxRequests - 1 };
    }

    if (record.count >= maxRequests) {
        return { allowed: false, remaining: 0 };
    }

    record.count++;
    return { allowed: true, remaining: maxRequests - record.count };
}

export function getRateLimitHeaders(key, maxRequests = 60) {
    const record = rateLimitStore.get(key);
    return {
        'X-RateLimit-Limit': String(maxRequests),
        'X-RateLimit-Remaining': String(record ? Math.max(0, maxRequests - record.count) : maxRequests),
    };
}
