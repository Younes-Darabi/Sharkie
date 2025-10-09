class PoisonsCounter extends DrawableObject {

    constructor() {
        super();
        this.loadImage("assets/images/4.Marcadores/Posión/Animada/0.png");
        this.x = 0;
        this.y = 70;
        this.width =28;
        this.height = 30;
        this.potions = 0;
    }

    setPotions(potions) {
        this.potions = potions;
    }

    draw(ctx) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.potions, this.x + 30, this.y + 25);
    }
}
