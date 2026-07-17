//export function normalizeUrl(url) {
//    return url.toLowerCase()
//      .split(' ')
//      .slice(0, 8)
//      .join('-')
//      .replace(/ñ/g, 'n')
//      .replace(/á|à|â|ä/g, 'a')
//      .replace(/é|è|ê|ë/g, 'e')
//      .replace(/í|ì|î|ï/g, 'i')
//      .replace(/ó|ò|ô|ö/g, 'o')
//      .replace(/ú|ù|ü|û/g, 'u')
//      .replace(/ñ/g, 'n')
//      .replace(/"|'|¿|\?|\^|!|#|\$|%|&|\/|\(|\)/g, '');
//}

export function updateUrlQueries(url, queries) {
  const urlObject = new URL(url)
  
  Object.entries(queries).forEach(([key, value]) => {
    urlObject.searchParams.set(key, value)
  })
  
  return urlObject.toString()
}