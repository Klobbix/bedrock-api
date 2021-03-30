/**
 * Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.
 */
declare interface Panic {

	/**
	 *  If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it.
	 *  @default false
	 */
	force: boolean;

	/**
	 * If true, the mob will not panic in response to damage from other mobs (only fire/lava etc).
	 * @default false
	 */
	ignore_mob_damage: boolean;

	/**
	 *  If true, the mob will prefer water over land.
	 *  @default false
	 */
	prefer_water: boolean;

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
