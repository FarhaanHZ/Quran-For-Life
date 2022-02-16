let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int=document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})

function ramadan(){
    adduser=document.getElementById("ramadan").value
    localStorage.setItem("ramadan", adduser);
    window.location="ramadan.html" 
}

function recordings(){
    adduser=document.getElementById("recordings").value
    localStorage.setItem("recordings", adduser);
    window.location="recording.html" 
}

function hadith(){
    adduser=document.getElementById("hadith").value
    localStorage.setItem("hadith", adduser);
    window.location="hadith.html" 
}

function story(){
    adduser=document.getElementById("story").value
    localStorage.setItem("story", adduser);
    window.location="story.html" 
}

function home(){
    adduser=document.getElementById("home").value
    localStorage.setItem("home", adduser);
    window.location="main.html" 
}

function quran(){
    adduser=document.getElementById("quran").value
    localStorage.setItem("quran", adduser);
    window.location="Quran.html" 
}