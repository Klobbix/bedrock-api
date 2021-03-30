/**
 * Despawns the Actor when the despawn rules or optional filters evaluate to true.
 */
declare interface DespawnComponent {

	/**
	 * The min and max distance to despawn the actor.
	 */
	despawn_from_distance: { max_distance: number, min_distance: number };

	/**
	 *  Determines if "min_range_random_chance" is used in the standard despawn rules.
	 *  @default true
	 */
	despawn_from_chance: boolean;

	/**
	 *  Determines if the "min_range_inactivity_timer" is used in the standard despawn rules.
	 *  @default true
	 */
	despawn_from_inactivity: boolean;

	/**
	 *  Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules.
	 *  @default true
	 */
	despawn_from_simulation_edge: boolean;

	/**
	 * The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored.
	 */
	filters: Filter;

	/**
	 *  The amount of time in seconds that the mob must be inactive.
	 *  @default 30
	 */
	min_range_inactivity_timer: number;

	/**
	 *  A random chance between 1 and the given value.
	 *  @default 800
	 */
	min_range_random_chance: number;

	/**
	 *  If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
	 *  @default false
	 */
	remove_child_entities: boolean;
}
