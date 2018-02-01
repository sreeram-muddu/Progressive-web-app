var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then( function () {
        console.log('sw registered')
    })
}

window.addEventListener('beforeinstallprompt', function(event){
    console.log('before install prompt fired')
    deferredPrompt=event;
    return false
})
