const albumDivs = document.querySelectorAll('.albumbox');

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