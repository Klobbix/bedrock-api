/**
 * Fires off a specified event when a block in the block list is broken within the sensor range.
 */
declare interface BlockSensorComponent {

	/**
	 * Distance to the block.
	 */
	sensor_radius: number;

	/**
	 * Events to be called.
	 */
	on_break: string[];
}
