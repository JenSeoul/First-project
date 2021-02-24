const albumDivs = document.querySelectorAll('.albumbox');
const controlPlay = document.querySelector('#controlplay');
const controlStop = document.querySelector('#controlstop');
const navPlay = document.querySelector('#navplay')
const navStop = document.querySelector('#navstop')
const allSongs = document.querySelectorAll('audio');
const allItags = document.querySelectorAll('i');
const arrayItags = Array.from(allItags);
const mainItags = arrayItags.slice(2,10);

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
tl.fromTo(".container", {opacity:0}, {opacity:1, duration:2});


mainItags.forEach(itags=>{
    itags.addEventListener('click', playSong);
    function playSong(e){
        const playButton = e.target;
        const div = playButton.parentElement.children;
        const anChor = Array.from(div)[0];
        const song = Array.from(anChor.children)[2];
        allSongs.forEach(songs=>songs.pause());
        mainItags.forEach(itags=>itags.style.color ='#363636');
        controlPlay.style.color = '#DB1210';
        navPlay.style.color = '#DB1210';
        playButton.style.color = '#DB1210';
        song.play();
        controlStop.addEventListener('click', ()=>{
            allSongs.forEach(songs=>songs.pause())
            song.pause()
            controlStop.style.color = '#DB1210';
            playButton.style.color= '#363636';
            controlPlay.style.color = '#fff';
            setTimeout(()=>{controlStop.style.color ='#fff'}, 1500)
        })
        navStop.addEventListener('click',()=>{
            allSongs.forEach(songs=>songs.pause())
            song.pause()
            playButton.style.color= '#363636';
            navPlay.style.color = '#fff';
            setTimeout(()=>{navStop.style.color = '#fff'},1500)
        })
        allSongs.forEach(songs=>{
            songs.onended = function(){
                playButton.style.color= '#363636';
                navPlay.style.color = '#fff';
                controlPlay.style.color ='#fff';
            }
        })
    }
})
