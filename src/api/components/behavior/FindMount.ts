/**
 * Allows the mob to look around for another mob to ride atop it.
 */
declare interface FindMount {

	/**
	 * If true, the mob will not go into water blocks when going towards a mount.
	 * @default false
	 */
	avoid_water: boolean;

	/**
	 * This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance.
	 * @default -1.0
	 */
	mount_distance: number;

	/**
	 * Time the mob will wait before starting to move towards the mount.
	 * @default 0
	 */
	start_delay: number;

	/**
	 * If true, the mob will only look for a mount if it has a target.
	 * @default false
	 */
	target_needed: boolean;

	/**
	 * Distance in blocks within which the mob will look for a mount.
	 * @default 0.0
	 */
	within_radius: number;
}
