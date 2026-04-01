export var m = new Audio();

export function Music() {
    this.src = src;
    this.volume = volume;
    this.loop = loop;

    const m = new Audio(this.src);
    m.volume = this.volume
    m.loop = this.loop;

    document.addEventListener("click", m.play())
}