const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const priceOption = document.querySelector('option')
const priceButton = document.querySelector('select');
const priceText = document.querySelector('#pricetext');
const purchaseButton = document.querySelector('.purchasebutton');
const moDal= document.querySelector('.modal');


tl.fromTo(".container", {opacity:0}, {opacity:1, duration:2});

purchaseButton.addEventListener('click', showModal);
priceButton.addEventListener('click', showPrice);
function showPrice(){priceText.innerHTML = `<span>${priceOption.value}</span>`};

function showModal(){
    moDal.style.display ='flex';
    window.onclick = function(e){
        if(e.target == moDal){
            moDal.style.display = 'none';
        }
    }
}