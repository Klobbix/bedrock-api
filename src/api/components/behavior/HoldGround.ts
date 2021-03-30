/**
 * The mob freezes and looks at the mob they are targeting.
 */
declare interface HoldGround {

	/**
	 * Whether to broadcast out the mob's target to other mobs of the same type.
	 * @default false
	 */
	broadcast: boolean;

	/**
	 * Range in blocks for how far to broadcast.
	 * @default 0.0f
	 */
	broadcast_range: number;

	/**
	 * Minimum distance the target must be for the mob to run this goal.
	 * @default 10.0f
	 */
	min_radius: number;

	/**
	 * Event to run when target is within the radius. This event is broadcasted if broadcast is true.
	 */
	within_radius_event: string;
}
