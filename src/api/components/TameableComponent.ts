/**
 * Defines the rules for a mob to be tamed by the player.
 */
declare interface TameableComponent {

	/**
	 * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%.
	 * @default 1
	 */
	probability: number;

	/**
	 * Event to run when this entity becomes tamed.
	 */
	tame_event: string;

	/**
	 * The list of items that can be used to tame this entity.
	 */
	tame_items: string[];
}
