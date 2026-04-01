export var m = new Audio();

export function Music() {
    this.src = src;
    this.volume = volume;
    this.loop = loop;

    m.volume = this.volume
    m.loop = this.loop;

    document.addEventListener("click", m.play())
}