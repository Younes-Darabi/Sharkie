class Character extends MovableObject {
    x = 0;
    y = 110;
    height = 350;
    width = 350;
    IMAGES_SWIMMING = [
        'assets/images/1.Sharkie/1.IDLE/1.png',
        'assets/images/1.Sharkie/1.IDLE/2.png',
        'assets/images/1.Sharkie/1.IDLE/3.png',
        'assets/images/1.Sharkie/1.IDLE/4.png',
        'assets/images/1.Sharkie/1.IDLE/5.png',
        'assets/images/1.Sharkie/1.IDLE/6.png',
        'assets/images/1.Sharkie/1.IDLE/7.png',
        'assets/images/1.Sharkie/1.IDLE/8.png',
        'assets/images/1.Sharkie/1.IDLE/9.png',
        'assets/images/1.Sharkie/1.IDLE/10.png',
        'assets/images/1.Sharkie/1.IDLE/11.png',
        'assets/images/1.Sharkie/1.IDLE/12.png',
        'assets/images/1.Sharkie/1.IDLE/13.png',
        'assets/images/1.Sharkie/1.IDLE/14.png',
        'assets/images/1.Sharkie/1.IDLE/15.png',
        'assets/images/1.Sharkie/1.IDLE/16.png',
        'assets/images/1.Sharkie/1.IDLE/17.png',
        'assets/images/1.Sharkie/1.IDLE/18.png',
    ];

    constructor() {
        super().loadImage('assets/images/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 120)
    }

    moveTop() {

    }

    moveDown() {

    }

}