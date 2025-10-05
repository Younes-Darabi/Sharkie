class JellyLila extends MovableObject {
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
        'assets/images/Enemies/Jelly/Lila/Lila1.png',
        'assets/images/Enemies/Jelly/Lila/Lila2.png',
        'assets/images/Enemies/Jelly/Lila/Lila3.png',
        'assets/images/Enemies/Jelly/Lila/Lila4.png',
    ];

    IMAGES_DEAD = [
        'assets/images/Enemies/Jelly/Lila/Dead/Lila1.png',
        'assets/images/Enemies/Jelly/Lila/Dead/Lila2.png',
        'assets/images/Enemies/Jelly/Lila/Dead/Lila3.png',
        'assets/images/Enemies/Jelly/Lila/Dead/Lila4.png',
    ];

    constructor(x) {
        super().loadImage('assets/images/Enemies/Jelly/Lila/Lila1.png');
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