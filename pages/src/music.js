export class Music {
    constructor(src, volume, loop) {
        this.src = src;
        this.volume = volume;
        this.loop = loop;

        const music = new Audio(this.src);
        music.volume = this.volume
        music.loop = this.loop;

        document.addEventListener("click", this.play())
    }

    play() {
        music.play()
    }

    stop() {
        music.stop()
    }
}