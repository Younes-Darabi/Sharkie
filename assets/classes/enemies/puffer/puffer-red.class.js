class PufferRed extends MovableObject {
    height = 70;
    width = 70;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim2.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim3.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim4.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim5.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 1200;
        this.y = Math.random() * (screenHeight - this.height);

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100)
    }

}