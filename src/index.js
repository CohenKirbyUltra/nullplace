// Music & DOM Loaded Variable

var DOMLoaded = false;

var Music = new Audio();

Music.src = "src/audio/lostandalone.mp3";
Music.volume = 0.23;
Music.autoplay = true;

document.addEventListener("click", function() {
    if (!DOMLoaded) {
        DOMLoaded = true;
        Music.play();
    }
});