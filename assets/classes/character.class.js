class Character extends MovableObject {
    x = -100;
    y = 80;
    height = 250;
    width = 250;
    world;
    speed = 1;
    isAttacking = false;
    isLongIdle = false;
    langCounter = 0;

    offset = {
        left: 50,
        top: 125,
        right: 50,
        bottom: 65,
        width: 150,
        height: 60,
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

    IMAGES_LONG_IDLE = [
        'assets/images/1.Sharkie/2.Long_IDLE/i1.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I2.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I3.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I4.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I5.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I6.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I7.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I8.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I9.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I10.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I11.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I12.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I13.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I14.png',
        'assets/images/1.Sharkie/2.Long_IDLE/I14.png',
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
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (World.gamePaused) return;
            if (this.isAttacking && this.poisons > 0) {
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
                this.isLongIdle = false;
                this.langCounter = 0;
            } else if (this.isLongIdle) {
                this.playAnimation(this.IMAGES_LONG_IDLE)
            } else {
                this.playAnimation(this.IMAGES_IDLE);

                this.langCounter++;
                if (this.langCounter > 40) {
                    this.isLongIdle = true;
                    this.langCounter = 0;
                }
            }
        }, 120)

        setInterval(() => {
            if (World.gamePaused) return;
            if (this.world.keyboard.SPACE && !this.isAttacking) {
                this.isAttacking = true;
                this.currentImage = 0;
                setTimeout(() => {
                    this.isAttacking = false;
                }, this.IMAGES_ATTACK.length * 130);
                world.bubbleShooter();
            }
            if (this.world.keyboard.LEFT) {
                this.x = Math.max(-500, this.x - this.speed);
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP) {
                this.y = Math.max(-120, this.y - this.speed);
            }
            if (this.world.keyboard.RIGHT) {
                this.x = Math.min(screenWidth * 6, this.x + this.speed);
                this.otherDirection = false;
            }
            if (this.world.keyboard.DOWN) {
                this.y = Math.min(screenHeight - 200, this.y + this.speed);
            }
            this.world.camera_x = -this.x + 100;
        }, 1)
    }
}