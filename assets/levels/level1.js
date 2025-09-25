const level1 = new Level(
    [
        new JellyLila(400),
        new JellyPink(800),
        new JellyYellow(1200),
        new JellyGreen(1600),

        new JellyLila(1350),
        new JellyPink(1100),
        new JellyYellow(1950),
        new JellyGreen(2250),

        new JellyLila(2300),
        new JellyPink(2480),
        new JellyYellow(2800),
        new JellyGreen(3100),

        new JellyLila(3400),
        new JellyPink(3800),
        new JellyYellow(4000),
        new JellyGreen(4100),

    ],
    [
        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),

        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),

        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),

        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),

        new PufferRed(),
        new PufferGreen(),
        new PufferOrange(),

        new FinalFish(),
    ],
    [
        new Coin(200, 580),
        new Coin(250, 530),
        new Coin(300, 480),
        new Coin(350, 530),
        new Coin(400, 580),

        new Coin(800, 80),
        new Coin(850, 130),
        new Coin(900, 80),
        new Coin(950, 130),
        new Coin(1000, 80),

        new Coin(1700, 500),
        new Coin(1750, 500),
        new Coin(1800, 500),
        new Coin(1850, 500),
        new Coin(1900, 500),

        new Coin(2800, 200),
        new Coin(2850, 250),
        new Coin(2900, 300),
        new Coin(2950, 350),
        new Coin(3000, 400),

    ],
    [
        new Poison(-300,140),
        new Poison(-300,220),
        new Poison(-300,300),
        new Poison(-300,380),
        new Poison(-300,460),
        new Poison(295,550),
        new Poison(900,480),
        new Poison(840,40),
        new Poison(900,480),
        new Poison(1250,500),
        new Poison(1800,550),
        new Poison(2200,100),
        new Poison(3040,400),
        new Poison(2750,120),
        new Poison(3400,50),
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