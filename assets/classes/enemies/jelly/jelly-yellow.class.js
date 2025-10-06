/**
 * Represents a yellow jelly enemy in the game.
 * This enemy moves vertically (top-bottom) and has swimming and dead animations.
 *
 * @extends MovableObject
 */
class JellyYellow extends MovableObject {

    /** @type {number} Display height of the enemy in pixels */
    height = 70;

    /** @type {number} Display width of the enemy in pixels */
    width = 70;

    /**
     * Collision offset for hit detection
     * @type {{left: number, top: number, right: number, bottom: number, width: number, height: number}}
     */
    offset = {
        left: 5,
        top: 10,
        right: 5,
        bottom: 10,
        width: 60,
        height: 50,
    };

    /** @type {string[]} Animation frames for swimming */
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Jelly/Yellow/Yellow1.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow2.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow3.png',
        'assets/images/Enemies/Jelly/Yellow/Yellow4.png',
    ];

    /** @type {string[]} Animation frames for dead state */
    IMAGES_DEAD = [
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow1.png',
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow2.png',
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow3.png',
        'assets/images/Enemies/Jelly/Yellow/Dead/Yellow4.png',
    ];

    /**
     * Creates a new yellow jelly enemy instance.
     * Randomizes the y position and loads all animation frames.
     * 
     * @param {number} x - The initial x position of the jelly
     */
    constructor(x) {
        super().loadImage('assets/images/Enemies/Jelly/Yellow/Yellow1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x;
        this.y = Math.random() * screenHeight;

        this.animate();
    }

    /**
     * Animates the JellyYellow based on its state.
     * - dead == 0 → swimming
     * - dead > 0 → dead animation
     *
     * @fires moveTopBottom()
     * @fires playAnimation()
     */
    animate() {
        this.moveTopBottom();
        setInterval(() => {
            if (World.gamePaused) return;

            if (this.dead == 0) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 200);
    }
}
