/**
 * Adds a trigger to call when this entity is set on fire.
 */
declare interface OnIgniteComponent {
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
