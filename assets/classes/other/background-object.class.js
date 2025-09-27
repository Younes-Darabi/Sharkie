/**
 * creats Background
 *@class
 */
class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = screenWidth;
    height = screenHeight;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}