/**
 * Displays the player's collected coins as a visual counter on the screen.
 * The counter updates dynamically based on the number of collected coins.
 *
 * @extends DrawableObject
 */
class CoinsCounter extends DrawableObject {

    /**
     * Paths to the coin counter images, representing different fill levels.
     * @type {string[]}
     */
    IMAGES_COINS = [
        'assets/images/4.Marcadores/Purple/0_ _1.png',
        'assets/images/4.Marcadores/Purple/20_ .png',
        'assets/images/4.Marcadores/Purple/40_ _1.png',
        'assets/images/4.Marcadores/Purple/60_ _1.png',
        'assets/images/4.Marcadores/Purple/80_ _1.png',
        'assets/images/4.Marcadores/Purple/100__1.png',
    ];

    /**
     * Creates a new coin counter, loads its images, and initializes its position.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 0;
        this.y = 25;
        this.width = 150;
        this.height = 45;
        this.setCoins(0);
    }

    /**
     * Updates the coin counter display according to the current number of collected coins.
     *
     * @param {number} coins - The number of collected coins.
     *
     * @remarks
     * The coin value is multiplied by 2.5 to calculate the image index.
     * Then the corresponding image from `IMAGES_COINS` is loaded into `this.img`.
     */
    setCoins(coins) {
        this.coins = coins * 2.5;
        let num = Math.floor(this.coins / 10);
        let path = this.IMAGES_COINS[num];
        this.img = this.imageCache[path];
    }
}
