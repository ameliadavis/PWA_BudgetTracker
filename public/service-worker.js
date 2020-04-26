console.log("Hi from your service-worker.js file!")

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/assets/css/style.css",
    "/dist/bundle.js",
  ];
  
  const STATIC_CACHE = "static-cache-v1";
  const RUNTIME_CACHE = "runtime-cache";
  
  self.addEventListener("install", event => {
    event.waitUntil(
      caches
        .open(STATIC_CACHE)
        .then(cache => cache.addAll(FILES_TO_CACHE))
        .then(() => self.skipWaiting())
    );
  });