class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    height = 150;
    width = 150;
    energy = 50;
    coins = 0;
    posions = 0;

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
        if (this instanceof Character || this instanceof JellyGreen || this instanceof JellyPink || this instanceof JellyLila || this instanceof JellyYellow || this instanceof PufferGreen || this instanceof PufferOrange || this instanceof PufferRed || this instanceof FinalFish || this instanceof Coin || this instanceof Posion) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            // ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
    }
}