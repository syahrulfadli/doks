// inject CSP
window.addEventListener('load', function(){
    console.log('injecting');
    const head = document.head;
    let csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://content.tinajs.io https://identity.tinajs.io; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; report-uri https://651b9ffb0fcafd85d341e570.endpoint.csper.io/?v=2; worker-src 'none';">`;
    head.insertAdjacentHTML('afterbegin', csp);
    console.log('injected');
  });