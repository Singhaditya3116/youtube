const CACHE_NAME = "demo-v3";

self.addEventListener("install", (e) => {
	self.skipWaiting();
});

self.addEventListener("activate", (e) => {
	e.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key !== CACHE_NAME) {
						return caches.delete(key);
					}
				})
			);
		})
	);
	self.clients.claim();
});

self.addEventListener("fetch", (e) => {
	if (e.request.method !== "GET") return;

	e.respondWith(
		fetch(e.request)
			.then((res) => {
				const clonedResponse = res.clone();
				caches.open(CACHE_NAME).then((cache) => {
					cache.put(e.request, clonedResponse);
				});
				return res;
			})
			.catch(() => {
				return caches.match(e.request).then((file) => file);
			})
	);
});
