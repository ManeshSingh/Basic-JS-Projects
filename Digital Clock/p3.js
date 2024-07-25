const clock = document.querySelector('.time')

setInterval(function(){
    let d = new Date();
    clock.innerHTML = d.toLocaleTimeString();
}, 1000)