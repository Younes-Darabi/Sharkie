/**
 * Represents a background object in the game scene.
 * These objects are static or scrolling background images that create depth in the environment.
 *
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {

    /**
     * The horizontal position of the background object.
     * @type {number}
     */
    x = 0;

    /**
     * The vertical position of the background object.
     * @type {number}
     */
    y = 0;

    /**
     * The width of the background image, usually matching the screen width.
     * @type {number}
     */
    width = screenWidth;

    /**
     * The height of the background image, usually matching the screen height.
     * @type {number}
     */
    height = screenHeight;

    /**
     * Creates a new background object and loads its image.
     *
     * @param {string} imagePath - The file path of the background image.
     * @param {number} x - The x-coordinate position where the image should be drawn.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}
