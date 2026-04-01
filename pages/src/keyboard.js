// For Keyboard Sounds in Inputs.

export function KeyClick(volume) {
    let v = volume;

    if (v < 0) {v = 0};
    if (v > 1) {v = 1};

    let me = new Audio();
    me.src = `../src/sfx/key/k${RNG(1, 6)}.wav`;
    me.volume = 0.6;
    me.play();
}