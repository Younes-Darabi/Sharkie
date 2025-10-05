class ThrowableObject extends MovableObject {
    x;
    y;
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 30,
        height: 30,
    };

    constructor(x, y) {
        super();
        this.loadImage('assets/images/1.Sharkie/4.Attack/Bubble-trap/Bubble.png');
        this.width = 30;
        this.height = 30;
        this.x = x + 200;
        this.y = y + 140;
        this.throw();
    }

    throw() {
        let fixDirection = world.character.otherDirection;
        setInterval(() => {
            if (World.gamePaused) return;
            if (fixDirection) { this.x -= 10 } else this.x += 10;
        }, 25);
    }
}