export default function Music {
    this.src = src;
    this.volume = volume;
    this.loop = loop;

    const music = new Audio(this.src);
    music.volume = this.volume
    music.loop = this.loop;

    document.addEventListener("click", music.play())
}