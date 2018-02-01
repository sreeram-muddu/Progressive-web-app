self.addEventListener('install', function(event){
    console.log('service worker is being installed...')
})
self.addEventListener('activate', function(event){
    console.log('service worker is being activated...')
    return self.clients.claim()
})
self.addEventListener('fetch', function(event){
     console.log('Service worker fetching something....')
     event.respondWith(fetch(event.request))
})
