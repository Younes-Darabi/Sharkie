class JellyGreen extends MovableObject {
    height = 80;
    width = 80;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Green/Green1.png',
        'assets/images/Enemies/Jelly/Green/Green2.png',
        'assets/images/Enemies/Jelly/Green/Green3.png',
        'assets/images/Enemies/Jelly/Green/Green4.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Green/Green1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = Math.random() * screenWidth;
        this.y = 0;

        this.animate();
    }

    animate() {
        this.moveTopBottom();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }

}