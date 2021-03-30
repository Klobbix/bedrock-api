/**
 * This component allows players determine what mobs spawn when certain difficulty levels are set.
 */
declare interface DifficultyFilterComponent {

	/**
	 * This is the maximum difficulty level that a mob spawns.
	 */
	max: string;

	/**
	 * This is the minimum difficulty level that a mob spawns.
	 */
	min: string;
}
