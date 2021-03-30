/**
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 */
declare interface LeashableComponent {

	/**
	 * If true, players can leash this entity even if it is already leashed to another mob.
	 * @default false
	 */
	can_be_stolen: boolean;

	/**
	 *  Distance in blocks at which the leash stiffens, restricting movement.
	 *  @default 6
	 */
	hard_distance: number;

	/**
	 * Distance in blocks at which the leash breaks.
	 * @default 10
	 */
	max_distance: number;

	/**
	 * Event to call when this entity is leashed.
	 */
	on_leash: string;

	/**
	 *  Event to call when this entity is unleashed.
	 */
	on_unleash: string;

	/**
	 * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
	 */
	soft_distance: number;
}
