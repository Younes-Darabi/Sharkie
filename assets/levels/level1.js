let level1;
function initLevel() {
    level1 = new Level(
        [
            // new JellyLila(400),
            // new JellyPink(800),
            // new JellyYellow(1200),
            // new JellyGreen(1600),

            // new JellyLila(1350),
            // new JellyPink(1100),
            // new JellyYellow(1950),
            // new JellyGreen(2250),

            // new JellyLila(2300),
            // new JellyPink(2480),
            // new JellyYellow(2800),
            // new JellyGreen(3100),

            // new JellyLila(3400),
            // new JellyPink(3800),
            // new JellyYellow(4000),
            // new JellyGreen(4100),
        ],
        [
            // new PufferRed(),
            // new PufferGreen(),
            // new PufferOrange(),

            // new PufferRed(),
            // new PufferGreen(),
            // new PufferOrange(),

            // new PufferRed(),
            // new PufferGreen(),
            // new PufferOrange(),

            // new PufferRed(),
            // new PufferGreen(),
            // new PufferOrange(),

            // new PufferRed(),
            // new PufferGreen(),
            // new PufferOrange(),
        ],
        [
            // new Coin(200, 410),
            // new Coin(250, 370),
            // new Coin(300, 320),
            // new Coin(350, 370),
            // new Coin(400, 410),

            // new Coin(800, 30),
            // new Coin(850, 80),
            // new Coin(900, 30),
            // new Coin(950, 80),
            // new Coin(1000, 30),

            // new Coin(1700, 300),
            // new Coin(1750, 300),
            // new Coin(1800, 300),
            // new Coin(1850, 300),
            // new Coin(1900, 300),

            // new Coin(2800, 100),
            // new Coin(2850, 150),
            // new Coin(2900, 200),
            // new Coin(2950, 250),
            // new Coin(3000, 300),
        ],
        [
            new Poison(-300, 130),
            new Poison(-350, 130),
            new Poison(-300, 210),
            new Poison(-350, 210),
            new Poison(-300, 290),
            new Poison(-350, 290),
            new Poison(295, 370),
            new Poison(840, 0),
            new Poison(900, 280),
            new Poison(950, 280),
            new Poison(1550, 400),
            new Poison(1800, 150),
            new Poison(2200, 300),

            new Poison(2750, 15),
            new Poison(3050, 300),
            new Poison(3400, 50),
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

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', screenWidth * 4),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', screenWidth * 4),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', screenWidth * 4),
            new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D1.png', screenWidth * 4),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', screenWidth * 5),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', screenWidth * 5),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', screenWidth * 5),
            new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D2.png', screenWidth * 5),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', screenWidth * 6),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', screenWidth * 6),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', screenWidth * 6),
            new BackgroundObject('assets/images/3.Background/Legacy/Layers/2. Floor/D1.png', screenWidth * 6),
        ],
        [
            new FinalEnemy(),
        ]
    );
}