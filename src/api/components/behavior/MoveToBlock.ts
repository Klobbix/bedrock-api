/**
 * Allow the mob to move towards selected types of blocks.
 * The goal will activate if there is any block matching that listed in 'block_types' within the 'search_range'.
 * 'on_reach' will trigger when the Mob is within the 'goal_radius' of the target block.
 * 'on_stay_completed' will trigger when they Mob has stayed at the target block for 'stay_duration' time.
 */
declare interface MoveToBlock {

	/**
	 * Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot.
	 * @default 0.5
	 */
	goal_radius: number;

	/**
	 * Trigger or list of triggers to trigger when the Mob comes within the 'goal_radius' of the target block.
	 */
	on_reach: Trigger;

	/**
	 * Trigger or list of triggers to trigger when the Mob has stayed at the target block for 'stay_duration' time.
	 */
	on_stay_completed: Trigger;

	/**
	 * The maximum height the Mob will look for target blocks.
	 * @default 1
	 */
	search_height: number;

	/**
	 * The maximum distance the Mob will look for target blocks.
	 * @default 0
	 */
	search_range: number;

	/**
	 * Multiplier for movement speed while moving towards the target block. 1.0 means no change in speed. 2.0 means twice as fast.
	 * @default 1.0
	 */
	speed_multiplier: number;

	/**
	 * Specifies a time that themob should stay at the target block. Fires 'on_stay_completed' after this duration.
	 * @default 0.0
	 */
	stay_duration: number;

	/**
	 * List or string of block descriptions.
	 *
	 * String format: "(namespace:)block_name(:data_value)"
	 * "target_blocks": "minecraft:stone:2"
	 *
	 * Object format (data field is optional):
	 * "target_blocks": { "item":"minecraft:dirt", "data":1 }
	 *
	 * List format can combine object and string format:
	 * "target_blocks": ["stone", "minecraft:dirt:2", { "item": "grass" }]

	 */
	target_blocks: string[];

	/**
	 * The offset is added to the target blocks position where [0.0, 0.0, 0.0] means the center of the block.
	 * @default [0.0, 0.0, 0.0]
	 */
	target_offset: VectorArray;

	/**
	 * Specifies what method of target selection should be used when there are multiple candidates within range. The available methods are 'nearest' and 'random'.
	 */
	target_selection_method: string;

	/**
	 *  Limits how often the mob searches for target blocks. 0 means every tick. Higher number means less often. Many mobs searching for blocks every tick could make the game run slower.
	 *  @default 20
	 */
	tick_interval: number;
}
