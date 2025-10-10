/**
 * The main canvas element used for rendering the game.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * The main game world instance.
 * @type {World}
 */
let world;

/**
 * The keyboard input handler.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Stores the current sound status before pausing or resuming the game.
 * @type {boolean}
 */
let soundStatus;

/**
 * Indicates whether the game is currently in fullscreen mode.
 * @type {boolean}
 */
let Fullscreen = false;

/**
 * Initializes the game by hiding the menu, showing the game screen,
 * setting up the level, and creating the world and keyboard instance.
 * Also sets default sound volumes.
 *
 * @function
 * @returns {void}
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
 *
 * @function
 * @returns {void}
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
 *
 * @function
 * @returns {void}
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
 *
 * @function
 * @returns {void}
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
 *
 * @function
 * @returns {void}
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
 *
 * @function
 * @param {HTMLElement} element - The game container to display in fullscreen.
 * @returns {void}
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
 *
 * @function
 * @returns {void}
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

/**
 * Handles keyboard input for keydown events.
 * Sets the appropriate keyboard properties to true.
 *
 * @event window#keydown
 * @param {KeyboardEvent} e - The keydown event object.
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) keyboard.LEFT = true;
    if (e.keyCode == 38) keyboard.UP = true;
    if (e.keyCode == 39) keyboard.RIGHT = true;
    if (e.keyCode == 40) keyboard.DOWN = true;
    if (e.keyCode == 32) keyboard.SPACE = true;
});

/**
 * Handles keyboard input for keyup events.
 * Sets the appropriate keyboard properties to false.
 *
 * @event window#keyup
 * @param {KeyboardEvent} e - The keyup event object.
 */
window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) keyboard.LEFT = false;
    if (e.keyCode == 38) keyboard.UP = false;
    if (e.keyCode == 39) keyboard.RIGHT = false;
    if (e.keyCode == 40) keyboard.DOWN = false;
    if (e.keyCode == 32) keyboard.SPACE = false;
});

/** 
 * Adds touch event listeners for on-screen control buttons.
 * Each button sets the corresponding keyboard direction or action.
 */
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

/**
 * Displays the control menu and hides the main game menu.
 *
 * @function
 * @returns {void}
 */
function showControl() {
    document.getElementById('menu_control').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

/**
 * Displays the description menu and hides the main game menu.
 *
 * @function
 * @returns {void}
 */
function showDescription() {
    document.getElementById('menu_description').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

/**
 * Displays the enemies menu and hides the main game menu.
 *
 * @function
 * @returns {void}
 */
function showEnemies() {
    document.getElementById('menu_enemies').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

/**
 * Displays the items menu and hides the main game menu.
 *
 * @function
 * @returns {void}
 */
function showItems() {
    document.getElementById('menu_items').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

/**
 * Displays the impressum menu and hides the main game menu.
 *
 * @function
 * @returns {void}
 */
function showImpressum() {
    document.getElementById('menu_impressum').style.display = 'flex';
    document.getElementById('game_menu').style.display = 'none';
}

/**
 * Closes all submenus and returns to the main game menu.
 *
 * @function
 * @returns {void}
 */
function btnClose() {
    document.getElementById('game_menu').style.display = 'flex';
    document.getElementById('menu_control').style.display = 'none';
    document.getElementById('menu_description').style.display = 'none';
    document.getElementById('menu_enemies').style.display = 'none';
    document.getElementById('menu_items').style.display = 'none';
    document.getElementById('menu_impressum').style.display = 'none';
}

/**
 * Prevents the context menu from appearing on mobile touch controls.
 * Improves gameplay experience on touch devices.
 */
document.getElementById("button_up").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_down").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_bobble").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_left").addEventListener("contextmenu", e => e.preventDefault());
document.getElementById("button_right").addEventListener("contextmenu", e => e.preventDefault());
