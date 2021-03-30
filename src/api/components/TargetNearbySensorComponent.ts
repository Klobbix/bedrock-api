/**
 * Defines the entity's range within which it can see or sense other entities to target them.
 */
declare interface TargetNearbySensorComponent {

	/**
	 *  Maximum distance in blocks that another entity will be considered in the 'inside' range.
	 *  @default 1
	 */
	inside_range: number;

	/**
	 * Whether the other entity needs to be visible to trigger 'inside' events.
	 * @default false
	 */
	must_see: boolean;

	/**
	 *  Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event.
	 */
	on_inside_range: {
		event: string;
		target: string;
	};

	/**
	 * Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event.
	 */
	on_outside_range: {
		event: string;
		target: string;
	};

	/**
	 *  	Event to call when an entity exits visual range. Can specify 'event' for the name of the event and 'target' for the target of the event.
	 */
	on_vision_lost_inside_range: {
		event: string;
		target: string;
	};


	/**
	 * Maximum distance in blocks that another entity will be considered in the 'outside' range.
	 * @default 5
	 */
	outside_range: number;
}
