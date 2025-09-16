class World {

    character = new Character();
    enemies = [
        new JellyLila(),
        new JellyPink(),
        new JellyYellow(),
        new JellyGreen(),
        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),
        new FinalFish(),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

}