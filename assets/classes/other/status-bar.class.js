/**
 * Displays the player's energy level on screen.
 * Updates dynamically based on remaining energy.
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
    IMAGES_ENERGY = [
        'assets/images/4.Marcadores/Purple/0_ .png',
        'assets/images/4.Marcadores/Purple/20__1.png',
        'assets/images/4.Marcadores/Purple/40_ .png',
        'assets/images/4.Marcadores/Purple/60_ .png',
        'assets/images/4.Marcadores/Purple/80_ .png',
        'assets/images/4.Marcadores/Purple/100_ .png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_ENERGY);
        this.x = 0;
        this.y = -10;
        this.width = 150;
        this.height = 50;
        this.setPercentage(50);
    }

    /**
     * Updates the energy bar according to the player's current energy.
     * @param {number} energy - Current energy value (0–100).
     */
    setPercentage(energy) {
        this.energy = energy;
        let num = Math.floor(this.energy / 10);
        let path = this.IMAGES_ENERGY[num];
        this.img = this.imageCache[path];
    }
}
