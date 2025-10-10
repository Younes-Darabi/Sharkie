/**
 * Represents the first game level with all enemies, items, background objects, and final boss.
 * Initializes all objects including Jellyfish, Pufferfish, Coins, Poisons, and Background layers.
 * @type {Level}
 */
let level1;

/**
 * Initializes level 1 by creating a new instance of the Level class.
 * It sets up:
 * - Different types of enemies (Jellys and Puffers)
 * - Collectible coins
 * - Poison obstacles
 * - Layered background images for depth
 * - The final enemy (boss)
 */
function initLevel() {
    level1 = new Level(
        /**
         * @type {JellyLila[]} Array of purple jellyfish enemies.
         * @type {JellyPink[]} Array of pink jellyfish enemies.
         * @type {JellyYellow[]} Array of yellow jellyfish enemies.
         * @type {JellyGreen[]} Array of green jellyfish enemies.
         */
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

        /**
         * @type {MovableObject[]} Array of Puffer enemies in different colors.
         */
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
        ],

        /**
         * @type {Coin[]} Array of collectible coins placed throughout the level.
         */
        [
            new Coin(200, 410),
            new Coin(250, 370),
            new Coin(300, 320),
            new Coin(350, 370),
            new Coin(400, 410),

            new Coin(800, 30),
            new Coin(850, 80),
            new Coin(900, 30),
            new Coin(950, 80),
            new Coin(1000, 30),

            new Coin(1700, 300),
            new Coin(1750, 300),
            new Coin(1800, 300),
            new Coin(1850, 300),
            new Coin(1900, 300),

            new Coin(2800, 100),
            new Coin(2850, 150),
            new Coin(2900, 200),
            new Coin(2950, 250),
            new Coin(3000, 300),
        ],

        /**
         * @type {Poison[]} Array of poison objects that act as obstacles.
         */
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

        /**
         * @type {BackgroundObject[]} Layered background objects creating depth effect.
         */
        [
            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', -screenWidth),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', -screenWidth),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', -screenWidth),
            new BackgroundObject('assets/images/3.Background/Dark/1.png', -screenWidth),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', 0),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', 0),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', 0),
            new BackgroundObject('assets/images/3.Background/Dark/2.png', 0),
            new BackgroundObject('assets/images/3.Background/Layers/1. Light/1.png', 0),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', screenWidth),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', screenWidth),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', screenWidth),
            new BackgroundObject('assets/images/3.Background/Dark/1.png', screenWidth),
            new BackgroundObject('assets/images/3.Background/Layers/1. Light/2.png', screenWidth),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', screenWidth * 2),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', screenWidth * 2),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', screenWidth * 2),
            new BackgroundObject('assets/images/3.Background/Dark/2.png', screenWidth * 2),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', screenWidth * 3),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', screenWidth * 3),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', screenWidth * 3),
            new BackgroundObject('assets/images/3.Background/Dark/1.png', screenWidth * 3),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', screenWidth * 4),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', screenWidth * 4),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', screenWidth * 4),
            new BackgroundObject('assets/images/3.Background/Dark/2.png', screenWidth * 4),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D1.png', screenWidth * 5),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D1.png', screenWidth * 5),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D1.png', screenWidth * 5),
            new BackgroundObject('assets/images/3.Background/Dark/1.png', screenWidth * 5),

            new BackgroundObject('assets/images/3.Background/Layers/5. Water/D2.png', screenWidth * 6),
            new BackgroundObject('assets/images/3.Background/Layers/4.Fondo 2/D2.png', screenWidth * 6),
            new BackgroundObject('assets/images/3.Background/Layers/3.Fondo 1/D2.png', screenWidth * 6),
            new BackgroundObject('assets/images/3.Background/Dark/2.png', screenWidth * 6),
        ],

        /**
         * @type {FinalEnemy[]} Array containing the final level boss.
         */
        [
            new FinalEnemy(),
        ]
    );
}
