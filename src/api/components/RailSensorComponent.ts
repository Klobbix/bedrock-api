/**
 * Defines a sensor for activation/deactivation of rails.
 */
declare interface RailSensorComponent {

	/**
	 * If true, on tick this entity will trigger its on_deactivate behavior.
	 * @default false
	 */
	check_block_types: boolean;

	/**
	 *  If true, this entity will eject all of its riders when it passes over an activated rail.
	 *  @default true
	 */
	eject_on_activate: boolean;

	/**
	 * If true, this entity will eject all of its riders when it passes over a deactivated rail.
	 * @default false
	 */
	eject_on_deactivate: boolean;

	/**
	 *  Event to call when the rail is activated.
	 */
	on_activate: string;

	/**
	 *  Event to call when the rail is deactivated.
	 */
	on_deactivate: string;

	/**
	 * If true, command blocks will start ticking when passing over an activated rail.
	 * @default true
	 */
	tick_command_block_on_activate: boolean;

	/**
	 * If false, command blocks will stop ticking when passing over a deactivated rail.
	 * @default false
	 */
	tick_command_block_on_deactivate: boolean;
}
