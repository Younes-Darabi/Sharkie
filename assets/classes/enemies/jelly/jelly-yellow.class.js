class JellyYellow extends MovableObject {
    height = 70;
    width = 70;
    offset = {
        left: 5,
        top: 10,
        right: 5,
        bottom: 10,
        width: 60,
        height: 50,
    };
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Yellow/Yellow1.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow2.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow3.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow4.png',
    ];

    IMAGES_DEAD = [
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow1.png',
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow2.png',
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow3.png',
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow4.png',
    ];

    constructor(x) {
        super().loadImage('assets/images/Enemies/Jelly/Yellow/Yellow1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x;
        this.y = Math.random() * screenHeight;

        this.animate();
    }

    animate() {
        this.moveTopBottom();
        setInterval(() => {
            if (World.gamePaused) return;
            if (this.dead == 0) { this.playAnimation(this.IMAGES_SWIMMING) } else {this.playAnimation(this.IMAGES_DEAD)};
        }, 200)
    }

}