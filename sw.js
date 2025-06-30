self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ukusoma-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png'
        // Add any other files you want offline
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
