const CACHE = 'cache-after-network'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(['/', '/index.html']))
      .catch((err) => console.log(err))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE) {
            return caches.delete(key)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(tryNetwork(event.request, 400).catch(() => getFromCache(event.request)))
})

const tryNetwork = (request, timeout) => {
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(reject, timeout)
    fetch(request).then((res) => {
      clearTimeout(timerId)
      const responseClone = res.clone()
      caches.open(CACHE).then((cache) => {
        cache.put(request, responseClone).then((response) => response)
      })
      resolve(res)
    }, reject)
  })
}

const getFromCache = (request) => {
  return caches
    .open(CACHE)
    .then((cache) => cache.match(request).then((result) => result || Promise.reject('no-match')))
}
