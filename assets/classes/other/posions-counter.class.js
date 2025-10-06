/**
 * Displays the number of collected poison bottles.
 * @extends DrawableObject
 */
class PoisonsCounter extends DrawableObject {
    IMAGES_POTION = [
        'assets/images/4.Marcadores/Purple/0_.png',
        'assets/images/4.Marcadores/Purple/20_.png',
        'assets/images/4.Marcadores/Purple/40_.png',
        'assets/images/4.Marcadores/Purple/60_.png',
        'assets/images/4.Marcadores/Purple/80_.png',
        'assets/images/4.Marcadores/Purple/100_.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_POTION);
        this.x = 0;
        this.y = 60;
        this.width = 150;
        this.height = 45;
        this.setPotions(0);
    }

    /**
     * Updates the poison counter display.
     * @param {number} poison - Number of collected poisons.
     */
    setPotions(poison) {
        this.poison = poison * 3.4;
        let num = Math.floor(this.poison / 10);
        let path = this.IMAGES_POTION[num];
        this.img = this.imageCache[path];
    }
}
