class MovableObject extends DrawableObject {
    speed = Math.random() * 1;
    otherDirection = false;
    lastHit = 0;
    lastHitFinalEnemy = 0;
    dead = 0;

    isColliding(mo) {
        return (
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top
        );
    }

    addToPoison() {
        this.poisons++;
        world.poisonsCounter.setPotions(this.poisons);
    }

    removeFromPoison() {
        if (this.poisons > 0) this.poisons--;
        world.poisonsCounter.setPotions(this.poisons);
    }

    addToCoins() {
        this.coins++;
    }

    resetCPEcounter() {
        this.poisons = 0;
        this.coins = 0;
        this.energy = 50;
        this.finalEnemyEnergy = 50;
        this.otherDirection = false;
    }

    hit(enemyType) {
        this.energy -= 1;
        this.enemyType = enemyType;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    finalEnemyHit() {
        this.finalEnemyEnergy -= 10;
        world.finalEnemySB.setPercentage(this.finalEnemyEnergy);
        if (this.finalEnemyEnergy < 0) {
            this.finalEnemyEnergy = 0;
        } else {
            this.lastHitFinalEnemy = new Date().getTime();
        }
    }

    finalEnemyIsHurt() {
        let timepassed = new Date().getTime() - this.lastHitFinalEnemy;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    finalEnemyIsDead() {
        return this.finalEnemyEnergy == 0;
    }

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

    moveLeft() {
        setInterval(() => {
            if (World.gamePaused) return;
            this.x -= this.speed + 1;
            this.x = this.x < -800 ? 5000 : this.x;
        }, 1000 / 60)
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}