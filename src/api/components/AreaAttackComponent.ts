/**
 * A component that does damage to entities that get within range.
 */
declare interface AreaAttackComponent {

	/**
	 * The damage cause.
	 */
	cause: string;

	/**
	 * Entities that can get hurt.
	 */
	entity_filter: string[];

	/**
	 * How much damage per tick is applied to entities that enter the damage range.
	 * @default 2
	 */
	damage_per_tick: number;

	/**
	 * How close a hostile entity must be to have the damage applied.
	 * @default 0.2
	 */
	damage_range: number;
}
