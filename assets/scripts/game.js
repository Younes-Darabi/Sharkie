let canvas, world;
let keyboard = new Keyboard();
let soundStatus;
let screenSize = false;

function init() {
    Sound.playOne(Sound.CLICK);
    document.getElementById('game_menu').style.display = 'none';
    document.getElementById('game_screen').style.display = 'block';
    document.getElementById('canvas').style.display = 'block';
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
        Sound.allSounds.forEach(sound => {
            sound.volume = 1;
        });
    };
}

function pauseRender() {
    soundStatus = Sound.volume;
    Sound.playOne(Sound.CLICK);
    World.gamePaused = true;
    document.getElementById('game_paused').style.display = 'flex';
    document.getElementById("pause_img").src = 'assets/images/icons/play.png';
    Sound.volume = true;
    volumeRender();
}

function playGameRender() {
    document.getElementById('game_paused').style.display = 'none';
    document.getElementById("pause_img").src = 'assets/images/icons/pause.png';
    Sound.playOne(Sound.CLICK);
    World.gamePaused = false;
    Sound.volume = !soundStatus;
    volumeRender();
}

function FullScreenRender() {
    Sound.playOne(Sound.CLICK);
    if (!screenSize) {
        let img = document.getElementById("screen_img");
        img.src = World.screenSize ? 'assets/images/icons/smallscreen.png' : 'assets/images/icons/fullscreen.png';
        let fullscreen = document.getElementById('canvas')
        if (fullscreen.requestFullscreen) {
            fullscreen.requestFullscreen();
        } else if (fullscreen.msRequestFullscreen) {
            fullscreen.msRequestFullscreen();
        } else if (fullscreen.webkitRequestFullscreen) {
            fullscreen.webkitRequestFullscreen();
        }
        screenSize = true;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        screenSize = false;
    }
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

