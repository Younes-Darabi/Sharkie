class PufferGreen extends MovableObject {
    height = 60;
    width = 60;
    offset = {
        left: 0,
        top: 5,
        right: 5,
        bottom: 15,
        width: 55,
        height: 40,
    };

    IMAGES_SWIMMING = [
        'assets/images/Enemies/Puffer/Green/1.Swim/1.swim1.png',
        'assets/images/Enemies/Puffer/Green/1.Swim/1.swim2.png',
        'assets/images/Enemies/Puffer/Green/1.Swim/1.swim3.png',
        'assets/images/Enemies/Puffer/Green/1.Swim/1.swim4.png',
        'assets/images/Enemies/Puffer/Green/1.Swim/1.swim5.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Puffer/Green/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 500 + Math.random() * 5000;
        this.y = Math.random() * (screenHeight - this.height);

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 100)
    }

}
