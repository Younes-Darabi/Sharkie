const level1 = new Level(
    [
        new JellyLila(),
        new JellyPink(),
        new JellyYellow(),
        new JellyGreen(),
        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),
        new FinalFish(),
    ],
    [
        new Coin(),
    ],
    [
        new Animada(),
    ],
    [
        new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', -screenWidth),
        new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', -screenWidth),
        new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', -screenWidth),
        new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D2.png', -screenWidth),

        new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('assets/images/3.Background/Layers/1. Light/1.png', 0),

        new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', screenWidth),
        new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', screenWidth),
        new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', screenWidth),
        new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D2.png', screenWidth),
        new BackgroundObject('assets/images/3.Background/Layers/1. Light/2.png', screenWidth),

        new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', screenWidth * 2),
        new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', screenWidth * 2),
        new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', screenWidth * 2),
        new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D1.png', screenWidth * 2),

        new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', screenWidth * 3),
        new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', screenWidth * 3),
        new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', screenWidth * 3),
        new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D2.png', screenWidth * 3),
    ]
);