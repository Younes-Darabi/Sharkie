let screenWidth = 720;
let screenHeight = 480;

class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinsCounter = new CoinsCounter();
    poisonsCounter = new PoisonsCounter();
    throwableObjects = [];
    gamePaused = false;
    screenSize = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        if (Sound.volume) Sound.playBg(Sound.BGMUSIC);
        this.gameEndedCheck();
    }

    gameEndedCheck() {
        setInterval(() => {
            if (this.character.energy == 0 || this.character.finalEnemyEnergy == 0) {
                if (this.character.energy > 0) { Sound.gameEnded(Sound.GAMEWIN) } else Sound.gameEnded(Sound.GAMEOVER);
                World.gamePaused = true;
                document.getElementById('game_ended').style.display = 'flex';
                let img = document.getElementById("game_over");
                img.src = this.character.energy > 0 ? 'assets/images/6.Botones/Tittles/You-win/Recurso19.png' : 'assets/images/6.Botones/Tittles/Game-Over/Recurso10.png';
            }
        }, 1000);
    }

    gameRestart() {
        initLevel();
        this.level = level1;
        this.throwableObjects = [];
        this.character.energy = 10;
        this.character.finalEnemyEnergy = 50;
        this.character.x = -200;
        this.character.y = 80;
        World.gamePaused = false;
        document.getElementById('game_ended').style.display = 'none';
        world.character.coins = 0;
        world.character.poisons = 0;
        this.coinsCounter = new CoinsCounter();
        this.poisonsCounter = new PoisonsCounter();
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



            if (this.character.isColliding(this.level.FinalEnemy[0])) {
                this.character.hit('puffer');
                this.statusBar.setPercentage(this.character.energy);
                if (Sound.volume) Sound.playOne(Sound.HITSOUND);
            };



            this.level.Puffers.forEach((puffer) => {
                if (this.character.isColliding(puffer)) {
                    this.character.hit('puffer');
                    this.statusBar.setPercentage(this.character.energy);
                    if (Sound.volume) Sound.playOne(Sound.HITSOUND);
                };
            });
            this.level.Jellys.forEach((jelly) => {
                if (this.character.isColliding(jelly)) {
                    this.character.hit('jelly');
                    this.statusBar.setPercentage(this.character.energy);
                    if (Sound.volume) Sound.playOne(Sound.ESHOCKSOUND);
                };
            });
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    if (Sound.volume) Sound.playOne(Sound.COINSOUND);
                    this.character.addToCoins();
                    this.coinsCounter.setCoins(this.character.coins);

                    this.level.coins = this.level.coins.filter(c => c !== coin);
                };
            });
            this.level.poisons.forEach((poison) => {
                if (this.character.isColliding(poison)) {
                    if (Sound.volume) Sound.playOne(Sound.POISONSOUND);
                    this.character.addToPoison();
                    this.poisonsCounter.setPotions(this.character.poisons);

                    this.level.poisons = this.level.poisons.filter(p => p !== poison);
                };
            });
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);

        this.addObjectsToMap(this.level.Jellys);
        this.addObjectsToMap(this.level.Puffers);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.FinalEnemy);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinsCounter);
        this.addToMap(this.poisonsCounter);
        this.ctx.translate(this.camera_x, 0);

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