let screenWidth = 1200;
let screenHeight = 680;

class MovableObject {
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = Math.random() * 0.50;

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
            this.x -= this.speed;
        }, 1000 / 60)
    }
}