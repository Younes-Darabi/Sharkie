class JellyYellow extends MovableObject {
    height = 80;
    width = 80;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Yellow/Yellow1.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow2.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow3.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow4.png',
    ];

    constructor(x) {
        super().loadImage('assets/images/Enemies/Jelly/Yellow/Yellow1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = x;
        this.y = Math.random() * screenHeight;

        this.animate();
    }

    animate() {
        this.moveTopBottom();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }

}