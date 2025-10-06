/**
 * Represents a red puffer enemy in the game.
 * This enemy has multiple animation states including swimming, transition, bubble swim, and dead.
 * The enemy moves left automatically and changes animation based on its current state.
 *
 * @extends MovableObject
 */
class PufferRed extends MovableObject {

    /** @type {number} Display height of the enemy in pixels */
    height = 60;

    /** @type {number} Display width of the enemy in pixels */
    width = 60;

    /**
     * Collision offset for hit detection
     * @type {{left: number, top: number, right: number, bottom: number, width: number, height: number}}
     */
    offset = {
        left: 0,
        top: 5,
        right: 5,
        bottom: 15,
        width: 55,
        height: 40,
    };

    /** @type {string[]} Animation frames for swimming */
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim2.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim3.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim4.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim5.png',
    ];

    /** @type {string[]} Animation frames for transition */
    IMAGES_TRANSITION = [
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition1.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition2.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition3.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition4.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition5.png',
    ];

    /** @type {string[]} Animation frames for bubble swim */
    IMAGES_BUBBLEESWIM = [
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim1.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim2.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim3.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim4.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    /** @type {string[]} Animation frames for dead state */
    IMAGES_DEAD = [
        'assets/images/Enemies/Puffer/Red/4.Dead/3.png',
        'assets/images/Enemies/Puffer/Red/4.Dead/3.2.png',
        'assets/images/Enemies/Puffer/Red/4.Dead/3.3.png',
    ];

    /**
     * Creates a new red puffer enemy instance.
     * Randomizes the initial x and y positions and loads all animation frames.
     */
    constructor() {
        super().loadImage('assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLEESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 500 + Math.random() * 5000;
        this.y = Math.random() * (screenHeight - this.height);
        this.animate();
    }

    /**
     * Animates the PufferRed based on its state.
     * - dead == 0 → swimming
     * - dead == 1 → transition
     * - dead == 2 → bubble swim
     * - dead > 2 → dead animation
     *
     * @fires moveLeft()
     * @fires playAnimation()
     */
    animate() {
        this.moveLeft();
        let i = 0;
        setInterval(() => {
            if (World.gamePaused) return;

            if (this.dead == 0) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else if (this.dead == 1) {
                this.playAnimation(this.IMAGES_TRANSITION);
                i++;
                if (i == 5) this.dead++;
            } else if (this.dead == 2) {
                this.playAnimation(this.IMAGES_BUBBLEESWIM);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 100);
    }
}
