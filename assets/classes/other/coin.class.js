class Coin extends MovableObject {
    width = 40;
    height = 40;

    IMAGES_COIN = [
        'assets/images/4.Marcadores/1. Coins/1.png',
        'assets/images/4.Marcadores/1. Coins/2.png',
        'assets/images/4.Marcadores/1. Coins/3.png',
        'assets/images/4.Marcadores/1. Coins/4.png',
    ];

    constructor() {
        super().loadImage('assets/images/4.Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COIN);

        this.x = Math.random() * 4000;
        this.y = 40 + Math.random() * screenHeight - 40;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_COIN.length;
            let path = this.IMAGES_COIN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250)
    }
}