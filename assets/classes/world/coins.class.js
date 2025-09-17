class Coin extends MovableObject {
    height = 40;
    width = 40;

    IMAGES_COIN = [
        'assets/images/4.Marcadores/1. Coins/1.png',
        'assets/images/4.Marcadores/1. Coins/2.png',
        'assets/images/4.Marcadores/1. Coins/3.png',
        'assets/images/4.Marcadores/1. Coins/4.png',
    ];

    constructor() {
        super().loadImage('assets/images/4.Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COIN);

        this.x = 100;
        this.y = 100;

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