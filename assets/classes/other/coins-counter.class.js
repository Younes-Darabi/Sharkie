class CoinsCounter extends DrawableObject {

    constructor() {
        super();
        this.loadImage('assets/images/4.Marcadores/1. Coins/1.png');
        this.x = 3;
        this.y = 40;
        this.width = 25;
        this.height = 25;
        this.coins = 0;
    }

    setCoins(coins) {
        this.coins = coins;
    }

    draw(ctx) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.coins, this.x + 30, this.y + 22);
    }
}
