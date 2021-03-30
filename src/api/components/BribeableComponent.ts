/**
 * Defines the way an entity can get into the 'bribed' state.
 */
declare interface BribeableComponent {

	/**
	 * Time in seconds before the Entity can be bribed again.
	 * @default 2.0
	 */
	bribe_cooldown: number;

	/**
	 *  The list of items that can be used to bribe the entity.
	 */
	bribe_items: string[];
}
