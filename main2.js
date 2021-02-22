const albumDivs = document.querySelectorAll('.albumbox');
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
tl.fromTo(".container", {opacity:0}, {opacity:1, duration:2});


albumDivs.forEach(albumDiv=>{
    albumDiv.addEventListener('mouseenter', showPlays);
    albumDiv.addEventListener('mouseleave', hidePlays);
function showPlays(e){
    const div = e.target;
    const albumPlay = Array.from(div.children)[1];
    albumPlay.style.display = 'inline-block';
}
function hidePlays(e){
    const div = e.target;
    const albumPlay = Array.from(div.children)[1];
    albumPlay.style.display = 'none';
}
})