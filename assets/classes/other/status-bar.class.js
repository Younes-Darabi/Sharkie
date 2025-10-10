/**
 * Represents the player's energy or health bar on the screen.
 * Displays the current energy as both an image and numerical value.
 * 
 * The bar updates dynamically as the player gains or loses energy.
 * 
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
    /**
     * Creates a new StatusBar instance positioned in the top-left corner of the screen.
     */
    constructor() {
        super();
        /**
         * @type {number} The current energy value (0–100).
         */
        this.energy = 50;

        this.loadImage('assets/images/4.Marcadores/green/100_  copia 3.png');
        this.x = -7;
        this.y = -10;
        this.width = 50;
        this.height = 50;
        this.setPercentage(this.energy);
    }

    /**
     * Updates the energy bar according to the player's current energy level.
     * 
     * @param {number} energy - The player's current energy value (0–100).
     */
    setPercentage(energy) {
        this.energy = energy;
    }

    /**
     * Draws the energy bar on the given canvas context.
     * Displays the numeric energy value next to the icon.
     * 
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText(this.energy, this.x + 43, this.y + 39);
    }
}
