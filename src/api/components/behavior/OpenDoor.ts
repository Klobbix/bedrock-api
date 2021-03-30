/**
 * Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.
 */
declare interface OpenDoor {

	/**
	 * If true, the mob will close the door after opening it and going through it.
	 * @default true
	 */
	close_door_after: boolean;

}
