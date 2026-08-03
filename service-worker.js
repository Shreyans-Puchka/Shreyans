const CACHE_NAME = "shreyans-ag-v1";

const FILES_TO_CACHE = [
  "/Shreyans/",
  "/Shreyans/index.html",
  "/Shreyans/manifest.json",
  "/Shreyans/icon-192.png",
  "/Shreyans/icon-512.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedFile) {
      return cachedFile || fetch(event.request);
    })
  );
});
