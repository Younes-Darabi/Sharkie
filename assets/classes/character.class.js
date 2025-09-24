class Character extends MovableObject {
    x = 0;
    y = 110;
    height = 300;
    width = 300;
    world;
    speed = 1;
    isAttacking = false;

    offset = {
        x: 90,
        y: 170,
        width: 145,
        height: 55,
    };

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

    IMAGES_DEAD = [
        'assets/images/1.Sharkie/6.dead/1.Poisoned/1.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/2.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/3.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/4.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/5.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/6.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/7.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/8.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/9.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/10.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/11.png',
        'assets/images/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_HURT = [
        'assets/images/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'assets/images/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'assets/images/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'assets/images/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];

    IMAGES_HURTJELLY = [
        'assets/images/1.Sharkie/5.Hurt/2.Electric-shock/o1.png',
        'assets/images/1.Sharkie/5.Hurt/2.Electric-shock/o2.png',
    ];

    IMAGES_ATTACK = [
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/1.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/2.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/3.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/4.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/5.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/6.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/7.png',
        'assets/images/1.Sharkie/4.Attack/Bubble-trap/op1/8.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_HURTJELLY);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isAttacking) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt() && this.enemyType == 'puffer') {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isHurt() && this.enemyType == 'jelly') {
                this.playAnimation(this.IMAGES_HURTJELLY);
            }
            else if (this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 120)

        setInterval(() => {
            if (this.world.keyboard.SPACE && !this.isAttacking) {
                if (this.posions > 0) this.posions -= 1;
                this.isAttacking = true;
                this.currentImage = 0;
                setTimeout(() => {
                    this.isAttacking = false;
                }, this.IMAGES_ATTACK.length * 130);
            }
            if (this.world.keyboard.LEFT) {
                this.x = Math.max(-500, this.x - this.speed);
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP) {
                this.y = Math.max(-140, this.y - this.speed);
            }
            if (this.world.keyboard.RIGHT) {
                this.x = Math.min(screenWidth * 3 + 200, this.x + this.speed);
                this.otherDirection = false;
            }
            if (this.world.keyboard.DOWN) {
                this.y = Math.min(screenHeight - 240, this.y + this.speed);
            }
            this.world.camera_x = -this.x + 200;
        }, 1)
    }
}