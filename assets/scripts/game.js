let canvas, world;
let keyboard = new Keyboard();

function init() {
    document.getElementById('game_menu').style.display = 'none';
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function volumeRender() {
    Sound.volume = !Sound.volume;
    let img = document.getElementById("volume_img");
    img.src = Sound.volume ? 'assets/images/icons/volume.png' : 'assets/images/icons/mute.png';
    if (!Sound.volume) { Sound.BGMUSIC.volume = 0 } else Sound.BGMUSIC.volume = 0.2;
}

window.addEventListener('keydown', (e) => {

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

});

window.addEventListener('keyup', (e) => {

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

});

