class MovableObject extends DrawableObject {
    speed = Math.random() * 1;
    otherDirection = false;
    lastHit = 0;

    isColliding(mo) {
        return this.x + this.offset.x < mo.x + mo.width &&
               this.x + this.offset.x + this.offset.width > mo.x &&
               this.y + this.offset.y < mo.y + mo.height &&
               this.y + this.offset.y + this.offset.height > mo.y
    }

    hit() {
        this.percentage -= 1;
        if (this.percentage < 0) {
            this.percentage = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.percentage == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    moveRight() {

    }

    moveTopBottom() {
        let direction = 1;
        setInterval(() => {
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
            this.x -= this.speed + 1;
        }, 1000 / 60)
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}