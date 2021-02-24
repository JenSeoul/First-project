const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const priceOption = document.querySelector('option')
const priceButton = document.querySelector('select');
const priceText = document.querySelector('#pricetext');
const purchaseButton = document.querySelector('.purchasebutton');
const moDal= document.querySelector('.modal');
const albumCover = document.querySelector('.albumcover');
const footerPlay = document.querySelector('#footerplay');
const footerStop = document.querySelector('#footerstop');
const navPlay = document.querySelector('#navplay');
const navStop = document.querySelector('#navstop');


tl.fromTo(".container", {opacity:0}, {opacity:1, duration:2});

purchaseButton.addEventListener('click', showModal);
priceButton.addEventListener('click', showPrice);
albumCover.addEventListener('click', playSong);
footerPlay.addEventListener('click', playSong);
navPlay.addEventListener('click', playSong);
function showPrice(){priceText.innerHTML = `<span>${priceOption.value}</span>`};

function showModal(){
    moDal.style.display ='flex';
    window.onclick = function(e){
        if(e.target == moDal){
            moDal.style.display = 'none';
        }
    }
}
function playSong(){
    const song = Array.from(albumCover.children)[1];
    song.pause()
    song.play()
    footerPlay.style.color = '#DB1210';
    navPlay.style.color ='#DB1210';
    footerStop.addEventListener('click',()=>{
        song.pause()
        footerStop.style.color = '#DB1210';
        footerPlay.style.color = '#fff';
        setTimeout(()=>{footerStop.style.color = '#fff'},1500);
    })
    navStop.addEventListener('click',()=>{
        song.pause()
        navStop.style.color = '#DB1210';
        navPlay.style.color = '#fff';
        setTimeout(()=>{navStop.style.color = '#fff'},1500);
    })
}
