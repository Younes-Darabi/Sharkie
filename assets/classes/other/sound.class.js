class Sound {
    static BGMUSIC = new Audio('assets/sounds/bg-music.mp3')
    static COINSOUND = new Audio('assets/sounds/coin.mp3')
    static POISONSOUND = new Audio('assets/sounds/poison.mp3')
    static ESHOCKSOUND = new Audio('assets/sounds/electric-shock.mp3')
    static HITSOUND = new Audio('assets/sounds/hit.mp3')

    static allSounds = [Sound.BGMUSIC, Sound.COINSOUND, Sound.POISONSOUND, Sound.ESHOCKSOUND, Sound.HITSOUND]

    static volume = true;

    static playOne(sound) {
        sound.play();
        sound.volume = 0.2;
    }

    static playBg(sound) {
        if (sound.readyState == 4) {
            sound.play();
            sound.volume = 0.2;
        }
        setInterval(() => {
            sound.play();
        }, 47000);

    }
}