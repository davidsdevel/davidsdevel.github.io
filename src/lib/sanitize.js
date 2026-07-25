import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(html) {
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr',
            'strong', 'em', 'b', 'i', 'u', 's', 'mark', 'small', 'sub', 'sup',
            'a', 'img', 'figure', 'figcaption',
            'ul', 'ol', 'li', 'pre', 'code', 'blockquote',
            'table', 'thead', 'tbody', 'tr', 'th', 'td',
            'div', 'span', 'section', 'article', 'aside', 'header', 'footer',
            'iframe', 'video', 'audio', 'source',
        ],
        ALLOWED_ATTR: [
            'href', 'src', 'alt', 'title', 'width', 'height', 'loading',
            'class', 'id', 'style', 'target', 'rel',
            'colspan', 'rowspan', 'scope',
            'allow', 'allowfullscreen', 'frameborder',
        ],
    });
}

export function sanitizeText(text) {
    if (typeof text !== 'string') return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}
