/**
 * Represents a collectible coin in the game world.
 * Coins can be collected by the player and are animated with a simple rotation effect.
 *
 * @extends MovableObject
 */
class Coin extends MovableObject {

    /**
     * The display width of the coin in pixels.
     * @type {number}
     */
    width = 40;

    /**
     * The display height of the coin in pixels.
     * @type {number}
     */
    height = 40;

    /**
     * The collision offset for the coin.
     * Used to fine-tune hitbox detection.
     * @type {{left: number, top: number, right: number, bottom: number, width: number, height: number}}
     */
    offset = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 40,
        height: 40,
    };

    /**
     * Paths to the coin animation frames.
     * @type {string[]}
     */
    IMAGES_COIN = [
        'assets/images/4.Marcadores/1. Coins/1.png',
        'assets/images/4.Marcadores/1. Coins/2.png',
        'assets/images/4.Marcadores/1. Coins/3.png',
        'assets/images/4.Marcadores/1. Coins/4.png',
    ];

    /**
     * Creates a new Coin instance at the specified position.
     *
     * @param {number} x - The x-coordinate of the coin's position.
     * @param {number} y - The y-coordinate of the coin's position.
     */
    constructor(x, y) {
        super().loadImage('assets/images/4.Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Animates the coin by cycling through its images at a fixed interval.
     * The animation pauses automatically when the game is paused.
     */
    animate() {
        setInterval(() => {
            if (World.gamePaused) return;
            let i = this.currentImage % this.IMAGES_COIN.length;
            let path = this.IMAGES_COIN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250);
    }
}
