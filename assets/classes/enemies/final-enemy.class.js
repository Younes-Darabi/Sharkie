/**
 * Represents the final boss enemy in the game.
 * The FinalEnemy has multiple animation states (intro, floating, attack, hurt, and dead)
 * and dynamically interacts with the player's position during gameplay.
 *
 * @extends MovableObject
 */
class FinalEnemy extends MovableObject {

    /**
     * The display height of the final enemy in pixels.
     * @type {number}
     */
    height = 400;

    /**
     * The display width of the final enemy in pixels.
     * @type {number}
     */
    width = 400;

    /**
     * Indicates whether the player has encountered the final enemy for the first time.
     * @type {boolean}
     */
    hadFirstContact = false;

    /**
     * The collision offset for hit detection.
     * @type {{left: number, top: number, right: number, bottom: number, width: number, height: number}}
     */
    offset = {
        left: 30,
        top: 200,
        right: 40,
        bottom: 80,
        width: 230,
        height: 120,
    };

    /**
     * Animation frames for the introduction sequence.
     * @type {string[]}
     */
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

    /**
     * Animation frames for the idle floating movement.
     * @type {string[]}
     */
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

    /**
     * Animation frames for the attack sequence.
     * @type {string[]}
     */
    IMAGES_ATTACK = [
        'assets/images/Enemies/Final-Enemy/Attack/1.png',
        'assets/images/Enemies/Final-Enemy/Attack/2.png',
        'assets/images/Enemies/Final-Enemy/Attack/3.png',
        'assets/images/Enemies/Final-Enemy/Attack/4.png',
        'assets/images/Enemies/Final-Enemy/Attack/5.png',
        'assets/images/Enemies/Final-Enemy/Attack/6.png',
    ];

    /**
     * Animation frames for the death sequence.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'assets/images/Enemies/Final-Enemy/Dead/6.png',
        'assets/images/Enemies/Final-Enemy/Dead/7.png',
        'assets/images/Enemies/Final-Enemy/Dead/8.png',
        'assets/images/Enemies/Final-Enemy/Dead/9.png',
        'assets/images/Enemies/Final-Enemy/Dead/10.png',
    ];

    /**
     * Animation frames for when the enemy is hurt.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'assets/images/Enemies/Final-Enemy/Hurt/1.png',
        'assets/images/Enemies/Final-Enemy/Hurt/2.png',
        'assets/images/Enemies/Final-Enemy/Hurt/3.png',
        'assets/images/Enemies/Final-Enemy/Hurt/4.png',
    ];

    /**
     * Creates a new instance of the FinalEnemy.
     * Loads all image sequences and starts the animation loop.
     */
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

    /**
     * Controls the FinalEnemy animation cycle based on its state.
     * The animation updates dynamically depending on the enemy’s current condition and player proximity.
     */
    animate() {
        let i = 0;
        setInterval(() => {
            if (World.gamePaused) return;
            this.finalEnemyShowCheck();
            if (this.finalEnemyIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.finalEnemyIsHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (i < 10 && this.hadFirstContact) {
                this.playAnimation(this.IMAGES_INTRODUCE);
                i++;
            } else if (world.character.finalEnemyAttak) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.hadFirstContact) {
                this.playAnimation(this.IMAGES_FLOATING);
                this.finalEnemyCharacterFollow();
            }
        }, 140);
    }

    /**
     * Checks if the player has reached the area where the FinalEnemy should appear.
     * If true, it activates the enemy’s health bar and sets the first contact flag.
     */
    finalEnemyShowCheck() {
        if (world.character.x > 3500) {
            this.hadFirstContact = true;
            world.finalEnemySB.width = 250;
            world.finalEnemySB.height = 80;
        }
    }

    /**
     * Makes the FinalEnemy follow the player’s position horizontally and vertically.
     * Movement speed and direction are adjusted dynamically.
     */
    finalEnemyCharacterFollow() {
        this.otherDirection = world.character.x > this.x;
        let xspeed = 20;
        let yspeed = 10;
        let dx = world.character.x - this.x;
        let dy = world.character.y - this.y - 100;

        if (dx > 10) this.x += xspeed;
        else if (dx < -10) this.x -= xspeed;

        if (dy > 10) this.y += yspeed;
        else if (dy < -10) this.y -= yspeed;
    }
}
