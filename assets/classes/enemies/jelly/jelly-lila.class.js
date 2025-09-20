class JellyLila extends MovableObject {
    height = 80;
    width = 80;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Lila/Lila1.png',
        'assets/images/Enemies/Jelly/Lila/Lila2.png',
        'assets/images/Enemies/Jelly/Lila/Lila3.png',
        'assets/images/Enemies/Jelly/Lila/Lila4.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Lila/Lila1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 1000;
        this.y = 100;

        this.animate();
    }

    animate() {
        this.moveTopBottom();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }

}

// this.animate(Math.random() * 3);
// animate(speed) {
//     setInterval(() => {
//         this.x -= speed;
//     }, 1000/60)
// }