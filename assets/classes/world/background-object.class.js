class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = 1200;
    height = 680;

    constructor(imagePath) {
        super().loadImage(imagePath);
    }
}