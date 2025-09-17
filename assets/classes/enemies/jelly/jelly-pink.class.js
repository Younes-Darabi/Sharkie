class JellyPink extends MovableObject {
    height = 80;
    width = 80;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Pink/Pink1.png',
        'assets/images/Enemies/Jelly/Pink/Pink2.png',
        'assets/images/Enemies/Jelly/Pink/Pink3.png',
        'assets/images/Enemies/Jelly/Pink/Pink4.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Pink/Pink1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = Math.random() * screenWidth;
        this.y = 200;

        this.animate();
    }

    animate() {
        this.moveTopBottom();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200)
    }

}