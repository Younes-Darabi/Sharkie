class Character extends MovableObject {
    x = 0;
    y = 110;
    height = 300;
    width = 300;
    world;

    IMAGES_IDLE = [
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

    IMAGES_SWIMMING = [
        'assets/images/1.Sharkie/3.Swim/1.png',
        'assets/images/1.Sharkie/3.Swim/2.png',
        'assets/images/1.Sharkie/3.Swim/3.png',
        'assets/images/1.Sharkie/3.Swim/4.png',
        'assets/images/1.Sharkie/3.Swim/5.png',
        'assets/images/1.Sharkie/3.Swim/6.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        setInterval(() => {

            if (this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.DOWN) {
                //Swimming animation
                let i = this.currentImage % this.IMAGES_SWIMMING.length;
                let path = this.IMAGES_SWIMMING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
            else {
                //Idle animation
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 120)

        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x = Math.max(-55, this.x - 1);
            }
            if (this.world.keyboard.UP) {
                this.y = Math.max(-140, this.y - 1);
            }
            if (this.world.keyboard.RIGHT) {
                this.x = Math.min(screenWidth-245, this.x + 1);
            }
            if (this.world.keyboard.DOWN) {
                this.y = Math.min(screenHeight-240, this.y + 1);
            }
        }, 1)
    }

    moveTop() {

    }

    moveDown() {

    }

}