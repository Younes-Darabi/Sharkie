class Volume extends DrawableObject {

    IMAGES_VOLUME = [
        'assets/images/icons/volume.png',
        'assets/images/icons/mute.png',
    ];

    constructor() {
        super();
        // this.loadImages(this.IMAGES_VOLUME)
        this.x = screenWidth - 50;
        this.y = 10;
        this.width = 40;
        this.height = 40;
        this.setVolume(true);
    }

    setVolume(status) {
        if (status) {
            console.log('True')
            this.loadImage(this.IMAGES_VOLUME[0])
        } else {
            console.log('False')
            this.loadImage(this.IMAGES_VOLUME[1])
            Sound.pauseAll();
        }
    }

}