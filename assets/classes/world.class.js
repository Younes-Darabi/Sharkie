let screenWidth = 1200;
let screenHeight = 680;

class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinsCounter = new CoinsCounter();
    posionsCounter = new PosionsCounter();
    volume = new Volume();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();

        Sound.playOne(Sound.BGMUSIC);
        setInterval(() => {
            Sound.playOne(Sound.BGMUSIC);
        }, 47000);
    }

    setWorld() {
        this.character.world = this;
    };

    checkCollisions() {
        setInterval(() => {
            if (this.keyboard.SPACE) {
                setTimeout(() => {
                    let bobble = new ThrowableObject(this.character.x, this.character.y);
                    this.throwableObjects.push(bobble);
                }, 800);
            }
            this.level.Puffers.forEach((puffer) => {
                if (this.character.isColliding(puffer)) {
                    this.character.hit('puffer');
                    this.statusBar.setPercentage(this.character.energy);
                    Sound.playOne(Sound.HITSOUND);
                };
            });
            this.level.Jellys.forEach((jelly) => {
                if (this.character.isColliding(jelly)) {
                    this.character.hit('jelly');
                    this.statusBar.setPercentage(this.character.energy);
                    Sound.playOne(Sound.ESHOCKSOUND);
                };
            });
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    Sound.playOne(Sound.COINSOUND);
                    this.character.addToCoins();
                    this.coinsCounter.setCoins(this.character.coins);

                    this.level.coins = this.level.coins.filter(c => c !== coin);
                };
            });
            this.level.posions.forEach((posion) => {
                if (this.character.isColliding(posion)) {
                    Sound.playOne(Sound.POSIONSOUND);
                    this.character.addToPosion();
                    this.posionsCounter.setPotions(this.character.posions);

                    this.level.posions = this.level.posions.filter(p => p !== posion);
                };
            });
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinsCounter);
        this.addToMap(this.posionsCounter);
        this.addToMap(this.volume);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.Jellys);
        this.addObjectsToMap(this.level.Puffers);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.posions);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

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
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}