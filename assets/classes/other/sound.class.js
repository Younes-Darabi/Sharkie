class Sound {
    static BGMUSIC = new Audio('assets/sounds/bg-music.mp3')
    static COINSOUND = new Audio('assets/sounds/coin.mp3')
    static POSIONSOUND = new Audio('assets/sounds/posion.mp3')
    static ESHOCKSOUND = new Audio('assets/sounds/electric-shock.mp3')
    static HITSOUND = new Audio('assets/sounds/hit.mp3')

    static allSounds = [Sound.BGMUSIC,Sound.COINSOUND,Sound.POSIONSOUND,Sound.ESHOCKSOUND,Sound.HITSOUND]

    static playOne(sound) {
        sound.volume = 0;  // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.currentTime = 0;  // Startet ab einer bestimmten stelle (0=Anfang/ 5 = 5 sec.)
        sound.play();
    }

    static pauseAll() {
        this.allSounds.forEach(sound => {
            sound.pause();
            // sound.volume = 0;
        });
    }
}