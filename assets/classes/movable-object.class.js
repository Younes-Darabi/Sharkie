class MovableObject {

    x = 0;
    y = 150;
    img;
    height = 150;
    width = 150;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });
    }

    moveRight() {

    }

    moveLeft() {

    }

}