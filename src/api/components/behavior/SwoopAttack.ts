/**
 * Allows the mob to move to attack a target.
 * The goal ends if it has a horizontal collision or gets hit. Built to be used with flying mobs.
 */
declare interface SwoopAttack {

	/**
	 * Range of time in seconds between uses of this goal.
	 * @default [10.0, 20.0]
	 */
	delay_range: MinecraftRange;

	/**
	 *  Movement speed multiplier of the mob when using this AI Goal.
	 *  @default 1.0
	 */
	speed_multiplier: number;
}
