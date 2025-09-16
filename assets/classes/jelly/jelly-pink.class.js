class JellyPink extends MovableObject {
    height = 100;
    width = 100;

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Pink/Pink1.png');
        this.x = 650;
        this.y = Math.random() * 380;
    }

}