// inject CSP
window.addEventListener('load', function(){
    console.log('injecting');
    const head = document.head;
    let csp = `<meta http-equiv="Content-Security-Policy" content="default-src gap://ready file://* *; style-src 'self' http://* https://* 'unsafe-inline'; script-src 'self' http://* https://* 'unsafe-inline' 'unsafe-eval'">`;
    head.insertAdjacentHTML('afterbegin', csp);
    console.log('injected');
  });