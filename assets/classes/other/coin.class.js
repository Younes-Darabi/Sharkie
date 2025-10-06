class Coin extends MovableObject {
    width = 40;
    height = 40;
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 40,
        height: 40,
    };
    IMAGES_COIN = [
        'assets/images/4.Marcadores/1. Coins/1.png',
        'assets/images/4.Marcadores/1. Coins/2.png',
        'assets/images/4.Marcadores/1. Coins/3.png',
        'assets/images/4.Marcadores/1. Coins/4.png',
    ];

    constructor(x, y) {
        super().loadImage('assets/images/4.Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COIN);

        this.x = x;
        this.y = y;

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (World.gamePaused) return;
            let i = this.currentImage % this.IMAGES_COIN.length;
            let path = this.IMAGES_COIN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250)
    }
}