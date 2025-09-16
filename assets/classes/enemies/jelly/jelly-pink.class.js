class JellyPink extends MovableObject {
    height = 80;
    width = 80;

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Pink/Pink1.png');
        this.x = 1120;
        this.y = Math.random() * 600;
        this.animate(Math.random() * 3);
    }

    animate(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000/60)
    }

}