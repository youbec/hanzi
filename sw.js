const CACHE_NAME = 'shengzi-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // 等你有了图标后，把 './icon-192.png', './icon-512.png' 也加进来
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});