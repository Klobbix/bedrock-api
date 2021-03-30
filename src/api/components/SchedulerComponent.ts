/**
 * Fires off scheduled mob events at time of day events.
 */
declare interface SchedulerComponent {

	/**
	 * The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked.
	 */
	scheduled_events: Trigger[];
}
