class PufferRed extends MovableObject {
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
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim2.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim3.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim4.png',
        'assets/images/Enemies/Puffer/Red/1.Swim/3.swim5.png',
    ];
    IMAGES_TRANSITION = [
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition1.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition2.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition3.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition4.png',
        'assets/images/Enemies/Puffer/Red/2.Transition/3.transition5.png',
    ];
    IMAGES_BUBBLEESWIM = [
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim1.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim2.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim3.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim4.png',
        'assets/images/Enemies/Puffer/Red/3.Bubbleeswim/3.bubbleswim5.png',
    ];
    IMAGES_DEAD = [
        'assets/images/Enemies/Puffer/Red/4.Dead/3.png',
        'assets/images/Enemies/Puffer/Red/4.Dead/3.2.png',
        'assets/images/Enemies/Puffer/Red/4.Dead/3.3.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLEESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 500 + Math.random() * 5000;
        this.y = Math.random() * (screenHeight - this.height);
        this.animate();
    }

    animate() {
        this.moveLeft();
        let i = 0;
        setInterval(() => {
            if (World.gamePaused) return;
            if (this.dead == 0) {
                this.playAnimation(this.IMAGES_SWIMMING)
            } else if (this.dead == 1) {
                this.playAnimation(this.IMAGES_TRANSITION)
                i++;
                if (i == 5) this.dead++;
            } else if (this.dead == 2) {
                this.playAnimation(this.IMAGES_BUBBLEESWIM)
            } else {
                this.playAnimation(this.IMAGES_DEAD)
            };
        }, 100)
    }
}