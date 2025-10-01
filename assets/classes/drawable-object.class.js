class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    height = 150;
    width = 150;
    energy = 50;
    finalEnemyEnergy = 50;
    finalEnemyAttak = false;
    coins = 0;
    poisons = 0;
    throwCooldown = false;

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
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading image', error);
            console.log('Could not load image,', this.img.src)
        }
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof JellyGreen || this instanceof JellyPink || this instanceof JellyLila || this instanceof JellyYellow || this instanceof PufferGreen || this instanceof PufferOrange || this instanceof PufferRed || this instanceof FinalEnemy || this instanceof Coin || this instanceof Poison) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            // ctx.rect(this.x, this.y, this.width, this.height);
            // ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
    }
}