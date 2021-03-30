/**
 * Allows the mob to be tempted by food they like.
 */
declare interface Tempt {

	/**
	 * If true, the mob can stop being tempted if the player moves too fast while close to this mob.
	 * @default false
	 */
	can_get_scared: boolean;

	/**
	 * If true, the mob will try to follow the player when being tempted, even if the mob is right above or below the player.
	 * @default false
	 */
	can_tempt_vertically: boolean;

	/**
	 * List of items this mob is tempted by.
	 */
	items: string[];

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * Distance in blocks this mob can get tempted by a player holding an item they like.
	 * @default 0.0
	 */
	within_radius: number;
}
