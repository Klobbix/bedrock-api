/**
 * This component allows players to determine the herd size of animals.
 */
declare interface HerdComponent {

	/**
	 * This is an event that can be triggered from spawning.
	 */
	event: string;

	/**
	 * This is the number of mobs spawned before the specified event is triggered.
	 */
	event_skip_count: number;

	/**
	 * This is the maximum number of mobs that spawn in a herd.
	 */
	max_size: number;

	/**
	 * This is the minimum number of mobs that spawn in a herd.
	 */
	min_size: number;
}
