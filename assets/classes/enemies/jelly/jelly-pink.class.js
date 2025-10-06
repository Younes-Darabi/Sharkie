class JellyPink extends MovableObject {
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
        'assets/images/Enemies/Jelly/Pink/Pink1.png',
        'assets/images/Enemies/Jelly/Pink/Pink2.png',
        'assets/images/Enemies/Jelly/Pink/Pink3.png',
        'assets/images/Enemies/Jelly/Pink/Pink4.png',
    ];
    IMAGES_DEAD = [
        'assets/images/Enemies/Jelly/Pink/Dead/Pink1.png',
        'assets/images/Enemies/Jelly/Pink/Dead/Pink2.png',
        'assets/images/Enemies/Jelly/Pink/Dead/Pink3.png',
        'assets/images/Enemies/Jelly/Pink/Dead/Pink4.png',
    ];

    constructor(x) {
        super().loadImage('assets/images/Enemies/Jelly/Pink/Pink1.png');
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
            if (this.dead == 0) { this.playAnimation(this.IMAGES_SWIMMING) } else { this.playAnimation(this.IMAGES_DEAD) };
        }, 200)
    }
}