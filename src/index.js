// Music & DOM Loaded Variable

var DOMLoaded = false;

var Music = new Audio();

Music.src = "src/audio/lostandalone.mp3";
Music.volume = 0.23;
Music.autoplay = true;
Music.loop = true;

Music.addEventListener("ended", Music.play());

// Dom Load Element

const DOMPlease = document.getElementById("LoadPlease");

document.body.addEventListener("click", async () => {
        if (!DOMLoaded) {
            DOMLoaded = true;
            Music.play();
            DOMPlease.animate(
            [
                { opacity: 1 }, 
                { opacity: 0 }
            ],
                {
                    fill: "forwards",
                    easing: "steps(4, end)",
                    duration: 1
                }
            );
            DOMPlease.remove();
        }
});