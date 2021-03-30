/**
 * Defines a set of conditions under which an entity should take damage.
 */
declare interface HurtOnConditionComponent {
	damage_conditions: {
		filters: Filter;
		cause: string;
		damage_per_tick: number;
	}[];
}
