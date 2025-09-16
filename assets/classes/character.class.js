class Character extends MovableObject {
    height = 350;
    width = 350;

    constructor() {
        super().loadImage('assets/images/1.Sharkie/1.IDLE/1.png');
        this.loadImages([
            'assets/images/1.Sharkie/1.IDLE/2.png',
            'assets/images/1.Sharkie/1.IDLE/3.png',
            'assets/images/1.Sharkie/1.IDLE/4.png',
            'assets/images/1.Sharkie/1.IDLE/5.png',
            'assets/images/1.Sharkie/1.IDLE/6.png',
        ])
    }

    moveTop() {

    }

    moveDown() {

    }

}