/**
 * Defines the entity's 'sit' state.
 */
declare interface SittableComponent {

	/**
	 * Event to run when the entity enters the 'sit' state.
	 */
	sit_event: string;

	/**
	 * Event to run when the entity exits the 'sit' state.
	 */
	stand_event: string;
}
