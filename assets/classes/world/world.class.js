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
        // new FinalFish(),
    ];

    backgroundObject = [
        new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png'),
        new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png'),
        new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png'),
        new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D1.png'),
        new BackgroundObject('assets/images/3.Background/Layers/1. Light/1.png'),
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        // this.ctx.clearRect(0, 0, this.canvas.width.this.canvas.height);

        this.addObjectsToMap(this.backgroundObject);

        this.addToMap(this.character);

        this.addObjectsToMap(this.enemies);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

}