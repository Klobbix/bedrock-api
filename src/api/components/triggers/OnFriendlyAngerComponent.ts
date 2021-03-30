/**
 * Adds a trigger that will run when a nearby entity of the same type as this entity becomes Angry.
 */
declare interface OnFriendlyAngerComponent {
	/**
	 * The event to run when the conditions for this trigger are met
	 */
	event: string;

	/**
	 * The list of conditions for this trigger
	 */
	filters: Filter;

	/**
	 * The target of the event.
	 * @default self
	 */
	target: string;
}
