/**
 * Adds a trigger to call when this entity finds a target.
 */
declare interface OnTargetAcquiredComponent {
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
