/**
 * Represents a game level, containing all objects and enemies.
 */
class Level {
    jellys;
    puffers;
    coins;
    poisons;
    backgroundObject;
    level_end_x = 700;
    finalEnemy;

    /**
     * Creates a new level.
     * @param {MovableObject[]} jellys - Array of jellyfish enemies.
     * @param {MovableObject[]} puffers - Array of puffer fish enemies.
     * @param {Coin[]} coins - Array of collectible coins.
     * @param {Poison[]} poisons - Array of poison bottles.
     * @param {BackgroundObject[]} backgroundObject - Array of background images.
     * @param {MovableObject} finalEnemy - The final boss of the level.
     */
    constructor(jellys, puffers, coins, poisons, backgroundObject, finalEnemy) {
        this.jellys = jellys;
        this.puffers = puffers;
        this.coins = coins;
        this.poisons = poisons;
        this.backgroundObject = backgroundObject;
        this.finalEnemy = finalEnemy;
    }
}
