class JellyYellow extends MovableObject {
    height = 80;
    width = 80;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Yellow/Yellow1.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow2.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow3.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow4.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Yellow/Yellow1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = Math.random() * screenWidth;
        this.y = 300;

        this.animate();
    }

    animate() {
        this.moveTopBottom();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }

}