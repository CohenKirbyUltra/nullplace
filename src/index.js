const root = document.documentElement;
const rootStyle = window.getComputedStyle(root);

// Get a specific CSS property value
const colorScheme = rootStyle.getPropertyValue('color-scheme');
console.log(colorScheme);

const darkimg = document.getElementById("img-darkmode");

// Function

var darkmode;

function updateScheme(bool) {
    if (bool) {
        darkmode = localStorage.getItem("darkmode");
    } else {
        darkmode = false;
    }

    if (darkmode) {
        darkimg.src = "src/images/svg/Moon.svg";
        root.style.setProperty('color-scheme', 'dark');
    } else {
        darkimg.src = "src/images/svg/Sun.svg";
        root.style.setProperty('color-scheme', 'light');
    }
}



// Music & DOM Loaded Variable

var DOMLoaded = false;

var Music = new Audio();

if (localStorage.getItem("darkmode") !== undefined || localStorage.getItem("darkmode") !== null) {
    updateScheme(false);
} else {
    localStorage.setItem("darkmode", false);
    updateScheme(true);
}

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

var change = false;

document.getElementById("darkmode").addEventListener("click", function () {
    if (!change) { 
        darkmode = true;
        localStorage.setItem("darkmode", true);
    } else {
        darkmode = false;
        localStorage.setItem("darkmode", false);
    }
});