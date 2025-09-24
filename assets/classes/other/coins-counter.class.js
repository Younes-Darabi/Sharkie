class CoinsCounter extends DrawableObject {

    IMAGES_COINS = [
        'assets/images/4.Marcadores/Purple/0_ _1.png',
        'assets/images/4.Marcadores/Purple/20_ .png',
        'assets/images/4.Marcadores/Purple/40_ _1.png',
        'assets/images/4.Marcadores/Purple/60_ _1.png',
        'assets/images/4.Marcadores/Purple/80_ _1.png',
        'assets/images/4.Marcadores/Purple/100__1.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS)
        this.x = 10;
        this.y = 40;
        this.width = 170;
        this.height = 50;
        this.setCoins(0);
    }

    setCoins(coins) {
        this.coins = coins*2.5;
        let num = Math.floor(this.coins / 10);
        let path = this.IMAGES_COINS[num];
        this.img = this.imageCache[path];
    }
}