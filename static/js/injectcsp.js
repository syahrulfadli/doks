// inject CSP
window.addEventListener('load', function(){
    console.log('injecting');
    const head = document.head;
    let csp = `<meta http-equiv="Content-Security-Policy" content="default-src * data: mediastream: blob: filesystem: about: ws: wss: 'unsafe-eval' 'wasm-unsafe-eval' 'unsafe-inline';">`;
    head.insertAdjacentHTML('afterbegin', csp);
    console.log('injected');
  });