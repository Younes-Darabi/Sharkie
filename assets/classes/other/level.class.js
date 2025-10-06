/**
 * Represents a game level, containing all objects and enemies.
 */
class Level {
    Jellys;
    Puffers;
    coins;
    poisons;
    backgroundObject;
    level_end_x = 700;
    FinalEnemy;

    /**
     * Creates a new level.
     * @param {MovableObject[]} Jellys - Array of jellyfish enemies.
     * @param {MovableObject[]} Puffers - Array of puffer fish enemies.
     * @param {Coin[]} coins - Array of collectible coins.
     * @param {Poison[]} poisons - Array of poison bottles.
     * @param {BackgroundObject[]} backgroundObject - Array of background images.
     * @param {MovableObject} FinalEnemy - The final boss of the level.
     */
    constructor(Jellys, Puffers, coins, poisons, backgroundObject, FinalEnemy) {
        this.Jellys = Jellys;
        this.Puffers = Puffers;
        this.coins = coins;
        this.poisons = poisons;
        this.backgroundObject = backgroundObject;
        this.FinalEnemy = FinalEnemy;
    }
}
