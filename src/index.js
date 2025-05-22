// Music & DOM Loaded Variable

var DOMLoaded = false;

var Music = new Audio();

Music.src = "src/audio/lostandalone.mp3";
Music.volume = 0.23;
Music.autoplay = true;
Music.loop = true;

// Dom Load Element

const DOMPlease = document.getElementById("LoadPlease");

document.body.addEventListener("click", async () => {
        if (!DOMLoaded) {
            DOMLoaded = true;
            Music.play();
            await DOMPlease.animate([{ opacity: 1 }, { opacity: 2 }],
                {
                    fill: "forwards",
                    easing: "steps(4, end)",
                    duration: 1, s,
                }
            );
            DOMPlease.remove();
        }
    });
