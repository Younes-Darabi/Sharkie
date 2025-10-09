/**
 * Handles all sound effects and background music in the game.
 * Provides static methods for playback control.
 */
class Sound {
    static BGMUSIC = new Audio('assets/sounds/bg-music.mp3');
    static COINSOUND = new Audio('assets/sounds/coin.mp3');
    static POISONSOUND = new Audio('assets/sounds/poison.mp3');
    static ESHOCKSOUND = new Audio('assets/sounds/electric-shock.mp3');
    static HITSOUND = new Audio('assets/sounds/hit.mp3');
    static GAMEOVER = new Audio('assets/sounds/game-over.mp3');
    static GAMEWIN = new Audio('assets/sounds/game-win.mp3');
    static BUBBLE = new Audio('assets/sounds/bubble.mp3');

    static allSounds = [Sound.BGMUSIC, Sound.COINSOUND, Sound.POISONSOUND, Sound.ESHOCKSOUND, Sound.HITSOUND];
    static all = [Sound.BGMUSIC, Sound.COINSOUND, Sound.POISONSOUND, Sound.ESHOCKSOUND, Sound.HITSOUND, Sound.GAMEOVER, Sound.GAMEWIN, Sound.BUBBLE];
    static volume = true;

    /**
     * Plays a single sound effect once.
     * @param {HTMLAudioElement} sound - The audio element to play.
     */
    static playOne(sound) {
        sound.play();
    }

    /**
     * Plays background music in a loop.
     * @param {HTMLAudioElement} sound - The background music element.
     */
    static playBg(sound) {
        if (sound.readyState == 4) {
            sound.play();
            sound.loop = true;
        }
    }
}
