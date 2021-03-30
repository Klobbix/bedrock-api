/**
 * Allows the mob to send an event to another mob.
 */
declare interface SendEvent {

	/**
	 * Time in seconds for the entire event sending process.
	 * @default Total delay of the steps
	 */
	cast_duration: number;

	/**
	 *  List of events to send
	 */
	sequence: {
		/**
		 * Amount of time in seconds before starting this step.
		 * @default 0.0
		 */
		base_delay: number;

		/**
		 * The event to send to the entity.
		 */
		event: string;

		/**
		 * The sound event to play when this step happens.
		 */
		sound_event: string;
	}[];
}
