let canvas, world;
let keyboard = new Keyboard();
let soundStatus;
let Fullscreen = false;

/**
 * Initializes the game by hiding the menu, showing the game screen,
 * setting up the level, and creating the world and keyboard instance.
 * Sets default sound volumes.
 */
function init() {
    document.getElementById('game_menu').style.display = 'none';
    document.getElementById('game_screen').style.display = 'flex';
    document.getElementById('canvas').style.display = 'block';
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    Sound.all.forEach(element => {
        element.volume = 0.1;
    });
}

/**
 * Toggles the game's sound on and off.
 * Updates the volume icon accordingly.
 */
function volumeRender() {
    Sound.volume = !Sound.volume;
    let img = document.getElementById("volume_img");
    img.src = Sound.volume ? 'assets/images/icons/volume.png' : 'assets/images/icons/mute.png';
    if (!Sound.volume) {
        Sound.all.forEach(sound => {
            sound.volume = 0;
        });
    } else {
        Sound.all.forEach(sound => {
            sound.volume = 0.1;
        });
    };
}

/**
 * Pauses the game and shows the pause menu.
 * Saves the current sound status.
 */
function pauseRender() {
    soundStatus = Sound.volume;
    World.gamePaused = true;
    document.getElementById('game_paused').style.display = 'flex';
    document.getElementById("pause_img").src = 'assets/images/icons/play.png';
    Sound.volume = true;
    volumeRender();
}

/**
 * Resumes the game from the paused state and restores sound settings.
 */
function playGameRender() {
    document.getElementById('game_paused').style.display = 'none';
    document.getElementById("pause_img").src = 'assets/images/icons/pause.png';
    World.gamePaused = false;
    Sound.volume = !soundStatus;
    volumeRender();
}

/**
 * Toggles fullscreen mode for the game canvas and updates the screen icon.
 */
function FullScreenRender() {
    Fullscreen = !Fullscreen;
    let img = document.getElementById("screen_img");
    img.src = Fullscreen ? 'assets/images/icons/smallscreen.png' : 'assets/images/icons/fullscreen.png';
    let gameScreen = document.getElementById('game_screen');
    if (Fullscreen) { enterFullScreen(gameScreen) } else exitFullScreen();
}

/**
 * Enters fullscreen mode for the given game element.
 * @param {HTMLElement} element - The game container to display in fullscreen.
 */
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

/**
 * Exits fullscreen mode and restores the original canvas size.
 */
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
    if (e.keyCode == 37) keyboard.LEFT = true;
    if (e.keyCode == 38) keyboard.UP = true;
    if (e.keyCode == 39) keyboard.RIGHT = true;
    if (e.keyCode == 40) keyboard.DOWN = true;
    if (e.keyCode == 32) keyboard.SPACE = true;
});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) keyboard.LEFT = false;
    if (e.keyCode == 38) keyboard.UP = false;
    if (e.keyCode == 39) keyboard.RIGHT = false;
    if (e.keyCode == 40) keyboard.DOWN = false;
    if (e.keyCode == 32) keyboard.SPACE = false;
});

document.getElementById('button_up').addEventListener('touchstart', function () { keyboard.UP = true; });
document.getElementById('button_bobble').addEventListener('touchstart', function () { keyboard.SPACE = true; });
document.getElementById('button_down').addEventListener('touchstart', function () { keyboard.DOWN = true; });
document.getElementById('button_left').addEventListener('touchstart', function () { keyboard.LEFT = true; });
document.getElementById('button_right').addEventListener('touchstart', function () { keyboard.RIGHT = true; });

document.getElementById('button_up').addEventListener('touchend', function () { keyboard.UP = false; });
document.getElementById('button_bobble').addEventListener('touchend', function () { keyboard.SPACE = false; });
document.getElementById('button_down').addEventListener('touchend', function () { keyboard.DOWN = false; });
document.getElementById('button_left').addEventListener('touchend', function () { keyboard.LEFT = false; });
document.getElementById('button_right').addEventListener('touchend', function () { keyboard.RIGHT = false; });

function showControl() {
    document.getElementById('menu_control').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

function showDescription() {
    document.getElementById('menu_description').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

function showEnemies() {
    document.getElementById('menu_enemies').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

function showItems() {
    document.getElementById('menu_items').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

function showImpressum() {
    document.getElementById('menu_impressum').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

function btnClose() {
    document.getElementById('game_menu').style.display = 'flex';
    document.getElementById('menu_control').style.display = 'none';
    document.getElementById('menu_description').style.display = 'none';
    document.getElementById('menu_enemies').style.display = 'none';
    document.getElementById('menu_items').style.display = 'none';
    document.getElementById('menu_impressum').style.display = 'none';
}

document.getElementById("button_up").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_down").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_bobble").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_left").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_right").addEventListener("contextmenu", e => e.preventDefault());