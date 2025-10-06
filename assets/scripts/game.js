let canvas, world;
let keyboard = new Keyboard();
let soundStatus;
let Fullscreen = false;

function init() {
    Sound.playOne(Sound.CLICK);
    document.getElementById('game_menu').style.display = 'none';
    document.getElementById('game_screen').style.display = 'flex';
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
        Sound.BUBBLE.volume = 0;
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
    Fullscreen = !Fullscreen;
    let img = document.getElementById("screen_img");
    img.src = Fullscreen ? 'assets/images/icons/smallscreen.png' : 'assets/images/icons/fullscreen.png';
    let gameScreen = document.getElementById('game_screen');
    if (Fullscreen) { enterFullScreen(gameScreen) } else exitFullScreen();
}

function enterFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
    const canvas = document.getElementById('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100vh';
    const gamePaused = document.getElementById('game_paused');
    gamePaused.style.width = '100%';
    gamePaused.style.height = '100vh';
    const gameEnded = document.getElementById('game_ended');
    gameEnded.style.width = '100%';
    gameEnded.style.height = '100vh';
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    screenSize = false;
    const canvas = document.getElementById('canvas');
    canvas.style.width = '720px';
    canvas.style.height = '480px';
    const gamePaused = document.getElementById('game_paused');
    gamePaused.style.width = '720px';
    gamePaused.style.height = '480px';
    const gameEnded = document.getElementById('game_ended');
    gameEnded.style.width = '720px';
    gameEnded.style.height = '480px';
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


document.getElementById('button_up').addEventListener('touchstart', function () {
    keyboard.UP = true;
});

document.getElementById('button_bobble').addEventListener('touchstart', function () {
    keyboard.SPACE = true;
});

document.getElementById('button_down').addEventListener('touchstart', function () {
    keyboard.DOWN = true;
});

document.getElementById('button_left').addEventListener('touchstart', function () {
    keyboard.LEFT = true;
});

document.getElementById('button_right').addEventListener('touchstart', function () {
    keyboard.RIGHT = true;
});





document.getElementById('button_up').addEventListener('touchend', function () {
    keyboard.UP = false;
});

document.getElementById('button_bobble').addEventListener('touchend', function () {
    keyboard.SPACE = false;
});

document.getElementById('button_down').addEventListener('touchend', function () {
    keyboard.DOWN = false;
});

document.getElementById('button_left').addEventListener('touchend', function () {
    keyboard.LEFT = false;
});

document.getElementById('button_right').addEventListener('touchend', function () {
    keyboard.RIGHT = false;
});