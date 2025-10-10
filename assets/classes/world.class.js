let screenWidth = 720;
let screenHeight = 480;

/**
 * Represents the main game world, managing all game entities, rendering,
 * collisions, and win/lose conditions.
 * 
 * @class
 */
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

    /**
     * Creates a new World instance.
     * @param {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
     * @param {Keyboard} keyboard - The keyboard input handler instance.
     */
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

    /**
     * Periodically checks whether the game has ended
     * (e.g., player has lost all energy or defeated the final enemy).
     * Displays the appropriate end screen.
     * @private
     */
    gameEndedCheck() {
        setInterval(() => {
            if (World.gamePaused) return;
            if (this.character.energy == 0 || this.finalEnemySB.finalEnemyEnergy == 0) {
                if (this.character.energy > 0) {
                    Sound.GAMEWIN.play();
                } else {
                    Sound.GAMEOVER.play();
                }
                Sound.BGMUSIC.pause();
                World.gamePaused = true;
                document.getElementById('game_ended').style.display = 'flex';
                let img = document.getElementById("game_over");
                img.src = this.character.energy > 0
                    ? 'assets/images/6.Botones/Tittles/You-win/Recurso19.png'
                    : 'assets/images/6.Botones/Tittles/Game-Over/Recurso10.png';
            }
        }, 2000);
    }

    /**
     * Restarts the game by resetting all objects, UI elements,
     * and restarting background music.
     */
    gameRestart() {
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
        world.finalEnemySB.width = 0;
        world.finalEnemySB.height = 0;
        this.soundRestart();
        playGameRender();
    }

    /**
     * Resets and restarts all sounds, including background music.
     */
    soundRestart() {
        Sound.BGMUSIC.play();
        if (Sound.volume) {
            Sound.allSounds.forEach(sound => {
                sound.volume = 0.1;
            });
        }
    }

    /**
     * Connects the world instance to the player character.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Handles shooting bubbles (poison projectiles) when the player presses SPACE.
     * The projectile is added to the world and removed after a short time.
     */
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
                this.character.throwCooldown = false;
            }, 800);
        }
    }

    /**
     * Sets up periodic collision checks for all objects.
     */
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

    /**
     * Checks and handles collisions between the character, the final enemy,
     * and throwable objects.
     * @private
     */
    finalEnemyCheckCollisions() {
        if (this.character.isColliding(this.level.finalEnemy[0])) {
            this.character.hit('puffer');
            this.statusBar.setPercentage(this.character.energy);
            if (Sound.volume) Sound.playOne(Sound.HITSOUND);
            this.character.finalEnemyAttak = true;
        } else {
            this.character.finalEnemyAttak = false;
        }
        this.throwableObjects.forEach((bobble) => {
            if (bobble.isColliding(this.level.finalEnemy[0])) {
                this.level.finalEnemy[0].finalEnemyHit();
                this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
            }
        });
    }

    /**
     * Checks collisions between the character, puffers, and thrown projectiles.
     * @private
     */
    pufferCheckCollisions() {
        this.level.puffers.forEach((puffer) => {
            if (this.character.isColliding(puffer)) {
                this.character.hit('puffer');
                this.statusBar.setPercentage(this.character.energy);
                if (Sound.volume) Sound.playOne(Sound.HITSOUND);
            }
            this.throwableObjects.forEach((bobble) => {
                if (bobble.isColliding(puffer)) {
                    puffer.dead++;
                    if (puffer.dead == 3) {
                        setTimeout(() => {
                            this.level.puffers = this.level.puffers.filter(p => p !== puffer);
                        }, 300);
                    }
                    this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
                }
            });
        });
    }

    /**
     * Checks collisions between the character, jelly enemies,
     * and projectiles thrown by the player.
     * @private
     */
    jellyCheckCollisions() {
        this.level.jellys.forEach((jelly) => {
            if (this.character.isColliding(jelly)) {
                this.character.hit('jelly');
                this.statusBar.setPercentage(this.character.energy);
                if (Sound.volume) Sound.playOne(Sound.ESHOCKSOUND);
            }
            this.throwableObjects.forEach((bobble) => {
                if (bobble.isColliding(jelly)) {
                    jelly.dead++;
                    setTimeout(() => {
                        this.level.jellys = this.level.jellys.filter(j => j !== jelly);
                    }, 800);
                    this.throwableObjects = this.throwableObjects.filter(b => b !== bobble);
                }
            });
        });
    }

    /**
     * Checks for collisions between the character and coins,
     * increases the coin counter and updates the UI.
     * @private
     */
    coinCheckCollisions() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                if (Sound.volume) Sound.playOne(Sound.COINSOUND);
                this.character.addToCoins();
                this.coinsCounter.setCoins(this.character.coins);
                this.level.coins = this.level.coins.filter(c => c !== coin);
            }
        });
    }

    /**
     * Checks for collisions between the character and poisons,
     * increases the poison counter and updates the UI.
     * @private
     */
    poisonCheckCollisions() {
        this.level.poisons.forEach((poison) => {
            if (this.character.isColliding(poison)) {
                if (Sound.volume) Sound.playOne(Sound.POISONSOUND);
                this.character.addToPoison();
                this.level.poisons = this.level.poisons.filter(p => p !== poison);
            }
        });
    }

    /**
     * Clears the canvas and renders all visible elements.
     * Uses recursion through `requestAnimationFrame()` for continuous animation.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.jellys);
        this.addObjectsToMap(this.level.puffers);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.finalEnemy);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.finalEnemySB);
        this.addToMap(this.coinsCounter);
        this.addToMap(this.poisonsCounter);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Adds multiple drawable objects to the canvas.
     * @param {DrawableObject[]} object - An array of drawable objects.
     */
    addObjectsToMap(object) {
        object.forEach(o => this.addToMap(o));
    }

    /**
     * Draws a single object on the canvas, flipping it horizontally if needed.
     * @param {DrawableObject} mo - The object to draw.
     */
    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    /**
     * Flips an image horizontally.
     * @param {DrawableObject} mo - The object whose image will be flipped.
     * @private
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the original image orientation after flipping.
     * @param {DrawableObject} mo - The object whose image will be restored.
     * @private
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
