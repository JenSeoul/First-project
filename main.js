const albumDivs = document.querySelectorAll('.albumbox');
const footerPlay = document.querySelector('#footerplay');
const footerStop = document.querySelector('#footerstop');

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
tl.to(".text",{y:"0", duration:1, stagger: 0.25});
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5});
tl.to(".intro", {y:"-100%", duration:1, delay:0.5}, "-=1");

albumDivs.forEach(albumDiv=>{
    albumDiv.addEventListener('mouseenter', showPlays);
    albumDiv.addEventListener('mouseleave', hidePlays);

    function showPlays(e){
        const div = e.target;
        const anChor = Array.from(div.children)[0];
        const song = Array.from(anChor.children)[2];
        const albumPlay = Array.from(div.children)[1];
        albumPlay.style.display = 'inline-block';

        albumPlay.addEventListener('click', playSong);
        function playSong(){
            song.play();
            footerPlay.style.color = '#DB1210';
            footerStop.addEventListener('click', stopSong);
            function stopSong(){
                song.pause();
                footerPlay.style.color = '#fff';
                footerStop.style.color = '#DB1210';
                setTimeout(()=>{
                    footerStop.style.color ='#fff';
                },1000)
            }
        }
    }
    function hidePlays(e){
        const div = e.target;
        const albumPlay = Array.from(div.children)[1];
        albumPlay.style.display = 'none';
    }
})
