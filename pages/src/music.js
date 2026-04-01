export var m = new Audio();

export function Music(src, volume, loop, func) {
    let audio = new Audio();
    audio.src = src;
    audio.volume = volume;
    audio.loop = loop;

    document.addEventListener("click", audio.play());
}