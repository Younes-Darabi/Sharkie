/**
 * Displays the energy bar of the final enemy.
 * @extends DrawableObject
 */
class FinalEnemySB extends DrawableObject {
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
        this.y = 400;
        this.width = 0;
        this.height = 0;
        this.setPercentage(50);
    }

    /**
     * Updates the final enemy's health bar.
     * @param {number} finalEnemyEnergy - Energy value of the final enemy (0–100).
     */
    setPercentage(finalEnemyEnergy) {
        this.finalEnemyEnergy = finalEnemyEnergy;
        let num = Math.floor(this.finalEnemyEnergy / 10);
        let path = this.IMAGES_ENERGY[num];
        this.img = this.imageCache[path];
    }
}
