/**
 * Can only be used by the Ocelot. Allows it to perform the sneak and pounce attack.
 */
declare interface OcelotAttack {

	/**
	 *  Multiplier for the sneaking speed. 1.0 means the ocelot will move at the speed it normally sneaks.
	 *  @default 1.0
	 */
	sneak_speed_multiplier: number;

	/**
	 * Multiplier for the running speed of this mob while using this attack.
	 * @default 1.0
	 */
	sprint_speed_multiplier: number;

	/**
	 *  Multiplier for the walking speed while using this attack.
	 *  @default 1.0
	 */
	walk_speed_multiplier: number;

}
