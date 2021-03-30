/**
 * Allows monsters to jump at and attack their target. Can only be used by hostile mobs.
 */
declare interface LeapAtTarget {

	/**
	 * If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air.
	 * @default true
	 */
	must_be_on_ground: boolean;

	/**
	 * Allows the actor to be set to persist upon targeting a player.
	 * @default false
	 */
	set_persistent: boolean;

	/**
	 * The height in blocks the mob jumps when leaping at its target.
	 * @default 0.0
	 */
	yd: number;
}
