/**
 * Interface representing the bindings for a Minecraft Slash Command.
 */
declare interface CommandBindings {

	/**
	 * Allows you to execute a Slash Command on the server. The command will be queried and executed at the end of the current frame. All data output from the command will be compiled on a JavaScript Object and sent to the Callback object specified in the second parameter.
	 * @param command The slash command to run
	 * @param callback The JavaScript object that will be called after the command executes
	 */
	executeCommand(command: string, callback: (callback: CommandCallback) => void): void;
}
