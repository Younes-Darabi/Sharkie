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
    finalEnemySB = new FinalEnemySB();
    coinsCounter = new CoinsCounter();
    poisonsCounter = new PoisonsCounter();
    throwableObjects = [];
    gamePaused = false;

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
            if (World.gamePaused) return;
            if (this.character.energy == 0 || this.finalEnemySB.finalEnemyEnergy == 0) {
                if (this.character.energy > 0) { Sound.gameEnded(Sound.GAMEWIN) } else Sound.gameEnded(Sound.GAMEOVER);
                World.gamePaused = true;
                document.getElementById('game_ended').style.display = 'flex';
                let img = document.getElementById("game_over");
                img.src = this.character.energy > 0 ? 'assets/images/6.Botones/Tittles/You-win/Recurso19.png' : 'assets/images/6.Botones/Tittles/Game-Over/Recurso10.png';
            }
        }, 2000);
    }

    gameRestart() {
        Sound.playOne(Sound.CLICK);
        initLevel();
        this.level = level1;
        this.throwableObjects = [];
        this.character.x = -100;
        this.character.y = 80;
        World.gamePaused = false;
        document.getElementById('game_ended').style.display = 'none';
        this.character.resetCPEcounter();
        this.coinsCounter.setCoins(0);
        this.poisonsCounter.setPotions(0);
        this.statusBar.setPercentage(50);
        this.finalEnemySB.setPercentage(50);
        if (Sound.volume) {
            Sound.allSounds.forEach(sound => {
                sound.volume = 1;
            });
        }
        Sound.counter = true;
        world.finalEnemySB.width = 0;
        world.finalEnemySB.height = 0;
    }

    setWorld() {
        this.character.world = this;
    };

    bubbleShooter() {
        if (this.keyboard.SPACE && !this.character.throwCooldown && this.character.poisons > 0) {
            this.character.removeFromPoison();
            this.character.throwCooldown = true;

            setTimeout(() => {
                let bobble;
                if (this.character.otherDirection) {
                    bobble = new ThrowableObject(this.character.x - 160, this.character.y);
                } else {
                    bobble = new ThrowableObject(this.character.x, this.character.y);
                }
                this.throwableObjects.push(bobble);
                Sound.playOne(Sound.BUBBLE);

                setTimeout(() => {
                    this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
                }, 900);

                setTimeout(() => {
                    this.character.throwCooldown = false;
                }, 1700);

            }, 800);
        }
    }


    checkCollisions() {
        setInterval(() => {
            if (World.gamePaused) return;
            this.finalEnemyCheckCollisions();
            this.pufferCheckCollisions();
            this.jellyCheckCollisions();
            this.coinCheckCollisions();
            this.poisonCheckCollisions();
        }, 200);
    }

    finalEnemyCheckCollisions() {
        if (this.character.isColliding(this.level.FinalEnemy[0])) {
            this.character.hit('puffer');
            this.statusBar.setPercentage(this.character.energy);
            if (Sound.volume) Sound.playOne(Sound.HITSOUND);
            this.character.finalEnemyAttak = true;
        } else {
            this.character.finalEnemyAttak = false;
        };
        this.throwableObjects.forEach((bobble) => {
            if (bobble.isColliding(this.level.FinalEnemy[0])) {
                this.level.FinalEnemy[0].finalEnemyHit();
                this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
            };
        });
    }

    pufferCheckCollisions() {
        this.level.Puffers.forEach((puffer) => {
            if (this.character.isColliding(puffer)) {
                this.character.hit('puffer');
                this.statusBar.setPercentage(this.character.energy);
                if (Sound.volume) Sound.playOne(Sound.HITSOUND);
            };
            this.throwableObjects.forEach((bobble) => {
                if (bobble.isColliding(puffer)) {
                    puffer.dead++;
                    if (puffer.dead == 3) {
                        setTimeout(() => {
                            this.level.Puffers = this.level.Puffers.filter(p => p !== puffer);
                        }, 300);
                    };
                    this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
                }
            });
        });
    }

    jellyCheckCollisions() {
        this.level.Jellys.forEach((jelly) => {
            if (this.character.isColliding(jelly)) {
                this.character.hit('jelly');
                this.statusBar.setPercentage(this.character.energy);
                if (Sound.volume) Sound.playOne(Sound.ESHOCKSOUND);
            };
            this.throwableObjects.forEach((bobble) => {
                if (bobble.isColliding(jelly)) {
                    jelly.dead++;
                    setTimeout(() => {
                        this.level.Jellys = this.level.Jellys.filter(j => j !== jelly);
                    }, 800);
                    this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
                }
            });
        });
    }

    coinCheckCollisions() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                if (Sound.volume) Sound.playOne(Sound.COINSOUND);
                this.character.addToCoins();
                this.coinsCounter.setCoins(this.character.coins);

                this.level.coins = this.level.coins.filter(c => c !== coin);
            };
        });
    };

    poisonCheckCollisions() {
        this.level.poisons.forEach((poison) => {
            if (this.character.isColliding(poison)) {
                if (Sound.volume) Sound.playOne(Sound.POISONSOUND);
                this.character.addToPoison();
                this.level.poisons = this.level.poisons.filter(p => p !== poison);
            };
        });
    };

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
        this.addToMap(this.finalEnemySB);
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