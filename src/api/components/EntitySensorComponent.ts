/**
 * A component that fires an event when a set of conditions are met by other entities within the defined range.
 */
declare interface EntitySensorComponent {

	event_filters: Filter;

	event: string;

	/**
	 * The maximum number of entities that must pass the filter conditions for the event to send.
	 * @default -1
	 */
	maximum_count: number;

	/**
	 * The minimum number of entities that must pass the filter conditions for the event to send.
	 * @default 1
	 */
	minimum_count: number;

	/**
	 * If true the sensor range is additive on top of the entity's size.
	 * @default true
	 */
	relative_range: boolean;

	/**
	 * If true requires all nearby entities to pass the filter conditions for the event to send.
	 * @default false
	 */
	require_all: boolean;

	/**
	 * The maximum distance another entity can be from this and have the filters checked against it.
	 * @default 10
	 */
	sensor_range: number;
}
