/**
 * Displays the player's energy level on screen.
 * Updates dynamically based on remaining energy.
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {

    constructor() {
        super();
        this.loadImage('assets/images/4.Marcadores/green/100_  copia 3.png');
        this.x = -7;
        this.y = -10;
        this.width = 50;
        this.height = 50;
        this.setPercentage(50);
        this.energy = 50;
    }

    /**
     * Updates the energy bar according to the player's current energy.
     * @param {number} energy - Current energy value (0–100).
     */
    setPercentage(energy) {
        this.energy = energy;
    }

    draw(ctx) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText(this.energy, this.x + 43, this.y + 39);
    }
}