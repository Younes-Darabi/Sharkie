/**
 * Base class for all movable objects in the game.
 * Handles movement, collisions, health, and interactions with other entities.
 * 
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    /**
     * @type {number} The movement speed of the object.
     */
    speed = Math.random() * 1;

    /**
     * @type {boolean} Indicates whether the object is facing left (true) or right (false).
     */
    otherDirection = false;

    /**
     * @type {number} Timestamp of the last hit taken by a regular enemy.
     */
    lastHit = 0;

    /**
     * @type {number} Timestamp of the last hit taken by the final enemy.
     */
    lastHitFinalEnemy = 0;

    /**
     * @type {number} Number of times the object has been hit or "killed".
     */
    dead = 0;

    /**
     * Checks whether this object is colliding with another movable object.
     * 
     * @param {MovableObject} mo - The other movable object to check collision with.
     * @returns {boolean} True if the two objects are colliding, otherwise false.
     */
    isColliding(mo) {
        return (
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top
        );
    }

    /**
     * Increases the number of poison bubbles the player owns.
     * Updates the poison counter in the world.
     */
    addToPoison() {
        this.poisons++;
        world.poisonsCounter.setPotions(this.poisons);
    }

    /**
     * Decreases the number of poison bubbles if available.
     * Updates the poison counter in the world.
     */
    removeFromPoison() {
        if (this.poisons > 0) this.poisons--;
        world.poisonsCounter.setPotions(this.poisons);
    }

    /**
     * Increases the player's collected coin count.
     */
    addToCoins() {
        this.coins++;
    }

    /**
     * Resets all character-related counters and energy levels.
     * Useful when restarting the game.
     */
    resetCPEcounter() {
        this.poisons = 0;
        this.coins = 0;
        this.energy = 50;
        this.finalEnemyEnergy = 50;
        this.otherDirection = false;
    }

    /**
     * Reduces the player’s energy when hit by an enemy.
     * 
     * @param {string} enemyType - The type of enemy that hit the player (e.g. "puffer" or "jelly").
     */
    hit(enemyType) {
        this.energy -= 1;
        this.enemyType = enemyType;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the player or enemy is dead.
     * 
     * @returns {boolean} True if energy is zero.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Checks if the player is currently hurt (recently hit).
     * 
     * @returns {boolean} True if hit occurred less than one second ago.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Reduces the final enemy’s energy when hit by a projectile.
     * Updates the corresponding status bar.
     */
    finalEnemyHit() {
        this.finalEnemyEnergy -= 10;
        world.finalEnemySB.setPercentage(this.finalEnemyEnergy);
        if (this.finalEnemyEnergy < 0) {
            this.finalEnemyEnergy = 0;
        } else {
            this.lastHitFinalEnemy = new Date().getTime();
        }
    }

    /**
     * Checks if the final enemy was recently hit.
     * 
     * @returns {boolean} True if the enemy was hit within the last second.
     */
    finalEnemyIsHurt() {
        let timepassed = new Date().getTime() - this.lastHitFinalEnemy;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Checks whether the final enemy has been defeated.
     * 
     * @returns {boolean} True if the final enemy's energy has reached zero.
     */
    finalEnemyIsDead() {
        return this.finalEnemyEnergy == 0;
    }

    /**
     * Moves the object up and down continuously between the top and bottom of the screen.
     * The movement stops when the game is paused.
     */
    moveTopBottom() {
        let direction = 1;
        setInterval(() => {
            if (World.gamePaused) return;
            this.y += this.speed + 2 * direction;

            if (this.y <= 0) {
                direction = 1;
            } else if (this.y >= screenHeight - this.height) {
                direction = -1;
            }
        }, 1000 / 60);
    }

    /**
     * Continuously moves the object to the left across the screen.
     * If it leaves the screen, it reappears on the far right.
     */
    moveLeft() {
        setInterval(() => {
            if (World.gamePaused) return;
            this.x -= this.speed + 1;
            this.x = this.x < -800 ? 5000 : this.x;
        }, 1000 / 60);
    }

    /**
     * Plays an animation using a sequence of image frames.
     * Automatically cycles through the provided image paths.
     * 
     * @param {string[]} images - Array of image paths representing animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
