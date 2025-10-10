/**
 * Displays the number of collected poison potions on the screen.
 * 
 * Appears as a small icon with a numeric counter that updates dynamically
 * as the player collects or uses potions.
 * 
 * @extends DrawableObject
 */
class PoisonsCounter extends DrawableObject {
    /**
     * Creates a new PoisonsCounter instance positioned below the energy bar.
     */
    constructor() {
        super();
        /**
         * @type {number} The number of collected poison potions.
         */
        this.potions = 0;

        this.loadImage("assets/images/4.Marcadores/Posión/Animada/0.png");
        this.x = 0;
        this.y = 70;
        this.width = 28;
        this.height = 30;
    }

    /**
     * Updates the counter to show the current number of collected potions.
     * 
     * @param {number} potions - The current number of poison potions.
     */
    setPotions(potions) {
        this.potions = potions;
    }

    /**
     * Draws the potion counter icon and number on the given canvas context.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.potions, this.x + 30, this.y + 25);
    }
}
