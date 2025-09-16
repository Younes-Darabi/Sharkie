class JellyGreen extends MovableObject {
    height = 100;
    width = 100;

    constructor() {
        super().loadImage('assets/images/Enemies/Jelly/Green/Green1.png');
        this.x = 650;
        this.y = Math.random() * 380;
    }

}