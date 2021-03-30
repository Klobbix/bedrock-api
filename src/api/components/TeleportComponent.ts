/**
 * Defines an entity's teleporting behavior.
 */
declare interface TeleportComponent {
	/**
	 * Modifies the chance that the entity will teleport if the entity is in darkness
	 * @default 0.01
	 */
	dark_teleport_chance: number;
	/**
	 * Modifies the chance that the entity will teleport if the entity is in daylight
	 * @default 0.01
	 */
	light_teleport_chance: number;
	/**
	 * Maximum amount of time in seconds between random teleports
	 * @default 20.0
	 */
	max_random_teleport_time: number;
	/**
	 * Minimum amount of time in seconds between random teleports
	 * @default 0.0
	 */
	min_random_teleport_time: number;
	/**
	 * Entity will teleport to a random position within the area defined by this cube
	 * @default [32.0, 16.0, 32.0]
	 */
	random_teleport_cube: VectorArray;
	/**
	 * If true, the entity will teleport randomly
	 * @default true
	 */
	random_teleports: boolean;
	/**
	 * Maximum distance the entity will teleport when chasing a target
	 * @default 16.0
	 */
	target_distance: number;
	/**
	 * The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%
	 * @default 1.0
	 */
	target_teleport_chance: number;
}
