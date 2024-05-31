console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 7;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Chaleya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Gulabi Sadi", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Heeriye", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Maan Meri Jaan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "O Mahi O Mahi", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Pehle Bhi Main", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Teri Baaton Mein Aisa Uljha Jiya", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tu Hai Kahan", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Ve Haniya", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        playSonginList();
        // console.log(audioElement);
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        makeAllPause();
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
   
    })
}

const makeAllPause = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

})
}

const playSonginList = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      if(songIndex==element.id){
        element.classList.add('fa-pause-circle');
        element.classList.remove('fa-play-circle');

      }
            
})}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
       
        if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlays();
            makeAllPause();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        }
        else{
        e.target.classList.add('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
      

    }
})})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})