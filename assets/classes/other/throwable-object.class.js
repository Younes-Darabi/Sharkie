class ThrowableObject extends MovableObject {
    x;
    y;
    constructor(x, y) {
        super().loadImage('assets/images/1.Sharkie/4.Attack/Bubble-trap/Bubble.png');
        this.width = 30;
        this.height = 30,
        this.x = x + 250;
        this.y = y + 165;
        this.trow(); 
    }

    trow() {
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}