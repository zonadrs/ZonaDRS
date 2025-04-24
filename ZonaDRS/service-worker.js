
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('zonadrs-store').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/style.css'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
