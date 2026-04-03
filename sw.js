// sw.js
const cacheName = 'avurudu-nakath-2026-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+Sinhala:wght@400;700&family=Poppins:wght@400;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
const cacheName = 'avurudu-nakath-2026-v2';
const assets = [
  './',
  './index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Notification එකක් Click කළ විට ඇප් එක විවෘත කිරීමට
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow('./') 
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
