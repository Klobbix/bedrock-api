/**
 * This event is used to remove a UI screen from the stack of the specific player running the client script.
 * The event data contains the name of the screen to remove as a string.
 * After the event is triggered the screen will be scheduled to be removed from the stack the next time the UI Engine can do so.
 * Only screens defined in a HTML file can be removed using this event.
 */
declare interface UnloadUIEvent {
	/**
	 * The file path to the screen's HTML file
	 */
	path: string;
}
