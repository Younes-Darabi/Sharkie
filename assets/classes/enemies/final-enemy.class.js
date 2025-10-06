/**
 * Creats a FinalEnemy.
 * @class
 */
class FinalEnemy extends MovableObject {
    height = 400;
    width = 400;
    hadFirstContact = false;
    offset = {
        left: 30,
        top: 200,
        right: 40,
        bottom: 80,
        width: 230,
        height: 120,
    };
    i = 0;
    IMAGES_INTRODUCE = [
        'assets/images/Enemies/Final-Enemy/1.Introduce/1.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/2.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/3.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/4.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/5.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/6.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/7.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/8.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/9.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/10.png',
    ];
    IMAGES_FLOATING = [
        'assets/images/Enemies/Final-Enemy/2.floating/1.png',
        'assets/images/Enemies/Final-Enemy/2.floating/2.png',
        'assets/images/Enemies/Final-Enemy/2.floating/3.png',
        'assets/images/Enemies/Final-Enemy/2.floating/4.png',
        'assets/images/Enemies/Final-Enemy/2.floating/5.png',
        'assets/images/Enemies/Final-Enemy/2.floating/6.png',
        'assets/images/Enemies/Final-Enemy/2.floating/7.png',
        'assets/images/Enemies/Final-Enemy/2.floating/8.png',
        'assets/images/Enemies/Final-Enemy/2.floating/9.png',
        'assets/images/Enemies/Final-Enemy/2.floating/10.png',
        'assets/images/Enemies/Final-Enemy/2.floating/11.png',
        'assets/images/Enemies/Final-Enemy/2.floating/12.png',
        'assets/images/Enemies/Final-Enemy/2.floating/13.png',
    ];
    IMAGES_ATTACK = [
        'assets/images/Enemies/Final-Enemy/Attack/1.png',
        'assets/images/Enemies/Final-Enemy/Attack/2.png',
        'assets/images/Enemies/Final-Enemy/Attack/3.png',
        'assets/images/Enemies/Final-Enemy/Attack/4.png',
        'assets/images/Enemies/Final-Enemy/Attack/5.png',
        'assets/images/Enemies/Final-Enemy/Attack/6.png',
    ];
    IMAGES_DEAD = [
        'assets/images/Enemies/Final-Enemy/Dead/6.png',
        'assets/images/Enemies/Final-Enemy/Dead/7.png',
        'assets/images/Enemies/Final-Enemy/Dead/8.png',
        'assets/images/Enemies/Final-Enemy/Dead/9.png',
        'assets/images/Enemies/Final-Enemy/Dead/10.png',
    ];
    IMAGES_HURT = [
        'assets/images/Enemies/Final-Enemy/Hurt/1.png',
        'assets/images/Enemies/Final-Enemy/Hurt/2.png',
        'assets/images/Enemies/Final-Enemy/Hurt/3.png',
        'assets/images/Enemies/Final-Enemy/Hurt/4.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = 4200;
        this.y = -50;
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (World.gamePaused) return;
            this.finalEnemyShowCheck();
            if (this.finalEnemyIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            }
            else if (this.finalEnemyIsHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }
            else if (i < 10 && this.hadFirstContact) {
                this.playAnimation(this.IMAGES_INTRODUCE);
                i++;
            }
            else if (world.character.finalEnemyAttak) {
                this.playAnimation(this.IMAGES_ATTACK);
            }
            else if (this.hadFirstContact) {
                this.playAnimation(this.IMAGES_FLOATING);
                this.finalEnemyCharacterFollow();
            };
        }, 140)
    }

    finalEnemyShowCheck() {
        if (world.character.x > 3500) {
            this.hadFirstContact = true
            world.finalEnemySB.width = 250;
            world.finalEnemySB.height = 80;
        };
    }

    finalEnemyCharacterFollow() {
        this.otherDirection = world.character.x > this.x ? true : false;
        let xspeed = 20;
        let yspeed = 10;
        let dx = world.character.x - this.x;
        let dy = world.character.y - this.y - 100;
        if (dx > 10) {
            this.x += xspeed; // right
        } else if (dx < -10) {
            this.x -= xspeed; // left
        }
        if (dy > 10) {
            this.y += yspeed; //bottom
        } else if (dy < -10) {
            this.y -= yspeed; //top
        }
    }
}