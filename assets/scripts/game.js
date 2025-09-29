let canvas, world;
let keyboard = new Keyboard();

function init() {
    Sound.playOne(Sound.CLICK);
    document.getElementById('game_menu').style.display = 'none';
    document.getElementById('game_screen').style.display = 'block';
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function volumeRender() {
    Sound.playOne(Sound.CLICK);
    Sound.volume = !Sound.volume;
    let img = document.getElementById("volume_img");
    img.src = Sound.volume ? 'assets/images/icons/volume.png' : 'assets/images/icons/mute.png';
    if (!Sound.volume) {
        Sound.BGMUSIC.volume = 0;
        Sound.CLICK.volume = 0;
    } else {
        Sound.BGMUSIC.volume = 1;
        Sound.CLICK.volume = 1;
    };
}

function pauseRender() {
    Sound.playOne(Sound.CLICK);
    Sound.volume = true;
    volumeRender();
    World.gamePaused = !World.gamePaused;
    if (World.gamePaused) { document.getElementById('game_paused').style.display = 'flex' } else document.getElementById('game_paused').style.display = 'none';
    let img = document.getElementById("pause_img");
    img.src = World.gamePaused ? 'assets/images/icons/play.png' : 'assets/images/icons/pause.png';
}

function screenRender() {
    Sound.playOne(Sound.CLICK);
    World.screenSize = !World.screenSize;
    let img = document.getElementById("screen_img");
    img.src = World.screenSize ? 'assets/images/icons/smallscreen.png' : 'assets/images/icons/fullscreen.png';
}

function menuRender() {
    pauseRender();
    document.getElementById('game_menu').style.display = 'flex';
    document.getElementById('game_screen').style.display = 'none';
    document.getElementById('game_ended').style.display = 'none';
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

