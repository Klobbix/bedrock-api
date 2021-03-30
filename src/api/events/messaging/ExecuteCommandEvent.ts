/**
 * This event is used to execute a slash command on the server with the World Owner permission level.
 * The event data contains the slash command as a string.
 * The slash command will be processed and will run after the event is sent.
 */
declare interface ExecuteCommandEvent {
	/**
	 * The command that will be run
	 */
	command: string;
}
