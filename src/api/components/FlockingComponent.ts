/**
 * Allows entities to flock in groups in water or not.
 */
declare interface FlockingComponent {

	/**
	 * The amount of blocks away the entity will look at to push away from.
	 * @default 0
	 */
	block_distance: number;

	/**
	 * The weight of the push back away from blocks.
	 * @default 0
	 */
	block_weight: number;

	/**
	 * The amount of push back given to a flocker that breaches out of the water.
	 * @default 0
	 */
	breach_influence: number;

	/**
	 * The threshold in which to start applying cohesion.
	 * @default 1
	 */
	cohesion_threshold: number;

	/**
	 * The weight applied for the cohesion steering of the flock.
	 * @default 1
	 */
	cohesion_weight: number;

	/**
	 *  The weight on which to apply on the goal output.
	 *  @default 0
	 */
	goal_weight: number;

	/**
	 * Determines the high bound amount of entities that can be allowed in the flock.
	 * @default 0
	 */
	high_flock_limit: number;

	/**
	 *  Tells the Flocking Component if the entity exists in water.
	 *  @default false
	 */
	in_water: boolean;

	/**
	 * The area around the entity that allows others to be added to the flock.
	 * @default 0
	 */
	influence_radius: number;

	/**
	 * The distance in which the flocker will stop applying cohesion.
	 * @default 0
	 */
	innner_cohesion_threshold: number;

	/**
	 *  The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points.
	 *  @default 0
	 */
	loner_chance: number;

	/**
	 *  Determines the low bound amount of entities that can be allowed in the flock.
	 *  @default 0
	 */
	low_flock_limit: number;

	/**
	 * Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers.
	 * @default false
	 */
	match_variants: boolean;

	/**
	 *  The max height allowable in the air or water.
	 *  @default 0
	 */
	max_height: number;

	/**
	 *  The min height allowable in the air or water.
	 *  @default 0
	 */
	min_height: number;

	/**
	 *  The distance that is determined to be to close to another flocking and to start applying separation.
	 *  @default 2
	 */
	separation_threshold: number;

	/**
	 *  The weight applied to the separation of the flock.
	 *  @default 1
	 */
	separation_weight: number;

	/**
	 * Tells the flockers that they will follow flocks based on the center of mass.
	 * @default false
	 */
	use_center_of_mass: boolean;

}
