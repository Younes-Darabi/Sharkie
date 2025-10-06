/**
 * Represents any drawable game object.
 * Provides methods for image loading and rendering.
 */
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

    /**
     * Loads a single image for this object.
     * @param {string} path - Path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and caches them for animations.
     * @param {string[]} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the object on the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D context.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading image', error);
            console.log('Could not load image,', this.img.src)
        }
    }

    /**
     * Draws a visual frame (outline) around certain types of game objects
     * for debugging or visual distinction purposes.
     *
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     *
     * @remarks
     * The frame is only drawn for specific object types such as Character,
     * different Jellyfish, Puffers, the FinalEnemy, Coin, and Poison objects.
     * The actual rectangle drawing is currently commented out for performance reasons.
     */
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