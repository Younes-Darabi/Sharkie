class Sound {
    static BGMUSIC = new Audio('assets/sounds/bg-music.mp3');
    static COINSOUND = new Audio('assets/sounds/coin.mp3');
    static POISONSOUND = new Audio('assets/sounds/poison.mp3');
    static ESHOCKSOUND = new Audio('assets/sounds/electric-shock.mp3');
    static HITSOUND = new Audio('assets/sounds/hit.mp3');
    static GAMEOVER = new Audio('assets/sounds/game-over.mp3');
    static GAMEWIN = new Audio('assets/sounds/game-win.mp3');
    static CLICK = new Audio('assets/sounds/click.mp3');

    static allSounds = [Sound.BGMUSIC, Sound.COINSOUND, Sound.POISONSOUND, Sound.ESHOCKSOUND, Sound.HITSOUND]
    static volume = true;

    //GAMEOVER counter
    static counter = true;

    static playOne(sound) {
        sound.play();
    }

    static playBg(sound) {
        if (sound.readyState == 4) {
            sound.play();
            sound.volume = 1;
            sound.loop = true;
        }
    }

    static gameEnded(result) {
        this.allSounds.forEach(sound => {
            sound.volume = 0;
        });
        if (this.counter && Sound.volume) result.play();
        this.counter = false;
    }


}