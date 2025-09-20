class MovableObject {
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = Math.random() * 1;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof JellyGreen || this instanceof JellyPink || this instanceof JellyLila || this instanceof JellyYellow || this instanceof PufferGreen || this instanceof PufferOrange || this instanceof PufferRed || this instanceof FinalFish || this instanceof Coin || this instanceof Animada) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    moveRight() {

    }

    moveTopBottom() {
        let direction = 1;
        setInterval(() => {
            this.y += this.speed + 2 * direction;

            if (this.y <= 0) {
                direction = 1;
            } else if (this.y >= 600) {
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