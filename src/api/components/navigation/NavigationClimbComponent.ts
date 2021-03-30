/**
 * Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.
 */
declare interface NavigationClimbComponent {

	/**
	 * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
	 * @default false
	 */
	avoid_portals: boolean;

	/**
	 *  Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
	 *  @default false
	 */
	avoid_sun: boolean;

	/**
	 * Tells the pathfinder to avoid water when creating a path.
	 * @default false
	 */
	avoid_water: boolean;

	/**
	 * Tells the pathfinder that it can path through a closed door and break it.
	 * @default false
	 */
	can_break_doors: boolean;

	/**
	 * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
	 * @default false
	 */
	can_open_doors: boolean;

	/**
	 * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
	 * @default false
	 */
	can_open_iron_doors: boolean;

	/**
	 * Whether a path can be created through a door.
	 * @default false
	 */
	can_pass_doors: boolean;

	/**
	 * Tells the pathfinder that it can start pathing when in the air.
	 * @default false
	 */
	can_path_from_air: boolean;

	/**
	 * Tells the pathfinder whether or not it can travel on the surface of the lava.
	 * @default false
	 */
	can_path_over_lava: boolean;

	/**
	 * Tells the pathfinder whether or not it can travel on the surface of the water.
	 * @default false
	 */
	can_path_over_water: boolean;

	/**
	 *  Tells the pathfinder whether or not it will be pulled down by gravity while in water.
	 *  @default false
	 */
	can_sink: boolean;

	/**
	 * Tells the pathfinder whether or not it can travel in lava like walking on ground.
	 * @default false
	 */
	can_walk_in_lava: boolean;

}
