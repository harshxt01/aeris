/* Aeris service worker
   A service worker is a small script the browser keeps running in the background for this site.
   It sits between the page and the internet, so it can answer requests from a saved copy
   when you're offline.

   Strategy:
   - The app itself (HTML, icons, fonts): answer from the saved copy instantly, refresh it in the background.
   - Weather data: always try the internet first. Save each answer. If offline, use the last saved
     answer and mark it with an "x-aeris-saved" header so the page can say how old it is.

   When you change index.html, bump VERSION so visitors get the new copy. */
const VERSION = 'aeris-v6';
const DATA = 'aeris-data';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== DATA).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function saveWithDate(request, response) {
  const body = await response.clone().blob();
  const headers = new Headers(response.headers);
  headers.set('x-aeris-saved', new Date().toISOString());
  const cache = await caches.open(DATA);
  await cache.put(request, new Response(body, { status: 200, headers }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Weather, air quality and city search: network first, saved copy if offline
  if (url.hostname.endsWith('open-meteo.com')) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) e.waitUntil(saveWithDate(req, res));
        return res;
      }).catch(async () => {
        const hit = await (await caches.open(DATA)).match(req);
        return hit || Response.error();
      })
    );
    return;
  }

  // The app and its fonts: saved copy first, refresh in the background
  if (url.origin === self.location.origin || url.hostname.endsWith('googleapis.com') || url.hostname.endsWith('gstatic.com')) {
    e.respondWith(
      caches.match(req, { ignoreSearch: url.origin === self.location.origin }).then(hit => {
        const fresh = fetch(req).then(res => {
          if (res.ok || res.type === 'opaque') {
            const copy = res.clone();
            e.waitUntil(caches.open(VERSION).then(c => c.put(req, copy)));
          }
          return res;
        }).catch(() => hit || caches.match('./index.html'));
        return hit || fresh;
      })
    );
  }
});
