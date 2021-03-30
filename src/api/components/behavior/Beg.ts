/**
 * Allows this mob to look at and follow the player that holds food they like.
 */
declare interface Beg {

	/**
	 * List of items that this mob likes.
	 */
	items: string[];

	/**
	 * Distance in blocks the mob will beg from.
	 * @default 8.0
	 */
	look_distance: number;

	/**
	 * The range of time in seconds this mob will stare at the player holding a food they like, begging for it
	 */
	look_time: MinecraftRange;
}
