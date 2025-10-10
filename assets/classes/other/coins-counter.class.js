/**
 * Displays the number of collected coins on the screen.
 * 
 * Shows a small coin icon along with a numeric counter that updates dynamically
 * as the player collects coins throughout the game.
 * 
 * @extends DrawableObject
 */
class CoinsCounter extends DrawableObject {
    /**
     * Creates a new CoinsCounter instance and initializes its position and appearance.
     */
    constructor() {
        super();
        /**
         * @type {number} The number of collected coins.
         */
        this.coins = 0;

        this.loadImage('assets/images/4.Marcadores/1. Coins/1.png');
        this.x = 3;
        this.y = 40;
        this.width = 25;
        this.height = 25;
    }

    /**
     * Updates the counter to reflect the current number of collected coins.
     * 
     * @param {number} coins - The current number of coins.
     */
    setCoins(coins) {
        this.coins = coins;
    }

    /**
     * Draws the coin counter icon and number on the given canvas context.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.coins, this.x + 30, this.y + 22);
    }
}
