/**
 * Defines the rules for a mob to trust players.
 */
declare interface TrustingComponent {

	/**
	 * The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%.
	 * @default 1
	 */
	probability: number;

	/**
	 * Event to run when this entity becomes trusting.
	 */
	trust_event: string;

	/**
	 * The list of items that can be used to get the entity to trust players.
	 */
	trust_items: string[];

}

