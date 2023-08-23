console.log("Welcome to spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPLay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let giff = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem'));



//initialize the variables
let songs = [
    {
        songName: "Love me Like you do - Ellie Goldin",
        filepath: "songs/1.mp3",
        cover: "covers/10.jpg"
    },
    {
        songName: "Kesariya - Brahmastra - Arjit Singh",
        filepath: "songs/2.mp3",
        cover: "covers/1.jpg"
    },
    {
        songName: "Heroes - Alesso",
        filepath: "songs/3.mp3",
        cover: "covers/2.jpg"
    },
    {
        songName: "Hold my hand - Akon & MJ",
        filepath: "songs/4.mp3",
        cover: "covers/3.jpg"
    },
    {
        songName: "Ten Feet Tall - Afrojack",
        filepath: "songs/5.mp3",
        cover: "covers/4.jpg"
    },
    {
        songName: "Rain over Me - Marc Anthony & Pitbul",
        filepath: "songs/6.mp3",
        cover: "covers/5.jpg"
    },
    {
        songName: "Fire Burning - Sean Kingstone",
        filepath: "songs/7.mp3",
        cover: "covers/6.jpg"
    },
    {
        songName: "Khuda Jane ye - KK",
        filepath: "songs/8.mp3",
        cover: "covers/7.jpg"
    },
    {
        songName: "Sooraj Duba he Yaroo - Arjit Singh",
        filepath: "songs/9.mp3",
        cover: "covers/8.jpg"
    },
    {
        songName: "Sakhiyaa",
        filepath: "songs/10.mp3",
        cover: "covers/9.jpg"
    },
]
songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].cover;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName

})

// audioElement.play()

//Handleplay pause click
masterPLay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPLay.classList.remove('fa-play-circle')
        masterPLay.classList.add('fa-pause-circle')
        giff.style.opacity = "1"
    }
    else {
        audioElement.pause()
        masterPLay.classList.add('fa-play-circle')
        masterPLay.classList.remove('fa-pause-circle')
        giff.style.opacity = "0"
    }

})


//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //updating seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')     
})
}

Array.from(document.getElementsByClassName('songListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPLay.classList.remove('fa-play-circle')
        masterPLay.classList.add('fa-pause-circle')
        
    })
})

//previous
let previous = document.getElementById("pr")
previous.addEventListener('click',()=>{
    if(songIndex=1){
        return songIndex=10;
    }
    else{
        songIndex -= 1 
    }
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.currentTime = 0
    audioElement.play()
    masterPLay.classList.remove('fa-play-circle')
    masterPLay.classList.add('fa-pause-circle')
    
})