
/*로컬 캐시에서 모든 에셋을 사용하게 하기 위해 에셋 경로 동적으로 선ㄴ언 */
const staticAssets = [
  './',
  './mobile.css',
  './mobile.js',
  './img/1.jpg',
  './img/2-1.jpg',
  './img/2-2.jpg',
  './img/2-3.jpg',
  './img/2-4.jpg',
  './img/2-5.jpg',
  './img/2-6.jpg',
  './img/2.jpg',
  './img/3-1.jpg',
  './img/3-2.jpg',
  './img/3-3.jpg',
  './img/3-4.jpg',
  './img/3-5.jpg',
  './img/3-6.jpg',
  './img/3-7.jpg',
  './img/3-8.jpg',
  './img/3-9.jpg',
  './img/3-10.jpg',
  './img/3-11.jpg',
  './img/3-12.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/banner.jpg',
  './img/close.jpg',
  './img/favicon.png',
  './img/icon1.png',
  './img/icon2.png',
  './img/logo_93_69.png',
  './img/main_img01.jpg',
  './img/pwaicon.png',
  './img/pwaicon192.png',
  './img/pwaicon512.png',
];

self.addEventListener('install', async event => {
  const cache = await caches.open('static-cache');
  cache.addAll(staticAssets);
});

/*캐시 fetch */
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.url) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(newtorkFirst(req));
  }
});

async function cacheFirst(req) {
  const cachedResponse = caches.match(req);
  return cachedResponse || fetch(req);
}

async function newtorkFirst(req) {
  const cache = await caches.open('dynamic-cache');

  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}