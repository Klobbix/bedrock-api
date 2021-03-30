/**
 * Allows an entity to go to the village bell and mingle with other entities.
 */
declare interface Mingle {

	/**
	 * Time in seconds the mob has to wait before using the goal again.
	 * @default 0.0
	 */
	cooldown_time: number;

	/**
	 * Amount of time in seconds that the entity will chat with another entity.
	 * @default 1.0
	 */
	duration: number;

	/**
	 * The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities.
	 * @default 2.0f
	 */
	mingle_distance: number;

	/**
	 * The entity type that this entity is allowed to mingle with.
	 * @default empty
	 */
	mingle_partner_type: string[];

	/**
	 * Movement speed multiplier of the mob when using this AI Goal.
	 * @default 1.0
	 */
	speed_multiplier: number;
}
