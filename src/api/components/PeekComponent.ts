/**
 * Defines the entity's 'peek' behavior, defining the events that should be called during it.
 */
declare interface PeekComponent {

	/**
	 * Event to call when the entity is done peeking.
	 */
	on_close: string;

	/**
	 * Event to call when the entity starts peeking.
	 */
	on_open: string;

	/**
	 * Event to call when the entity's target entity starts peeking.
	 */
	on_target_open: string;

}
