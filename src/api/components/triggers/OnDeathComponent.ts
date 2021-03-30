/**
 * Only usable by the Ender Dragon. Adds a trigger to call on this entity's death.
 */
declare interface OnDeathComponent {
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
