import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";
import { EventType } from "../../types/EventType";

export class MessagingHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * Executes a slash command on the server with the World Owner permission level.
	 * @param command The command that will be run
	 */
	performCommand(command: string): void {
		this.script.broadcastEvent(EventType.ExecuteCommand, {command: command});
	}

	/**
	 * Sends a message to be displayed in chat.
	 *
	 * @param message The message to send
	 */
	message(message: string): void {
		this.script.broadcastEvent(EventType.DisplayChat, {message: message});
	};

	/**
	 * This event is used to turn various levels of logging on and off for server scripts. Note that turning logging on/off is not limited to the script that broadcasted the event.
	 * It will affect ALL server scripts including those in other Behavior Packs that are applied to the world.
	 *
	 * @param logErrors Set to true to log any scripting errors that occur on the server
	 * @param logWarnings Set to true to log any scripting warnings that occur on the server
	 * @param logInformation Set to true to log any general scripting information that occurs on the server. This includes any logging done with server.log()
	 */
	setLoggerConfig(logErrors: boolean, logWarnings: boolean, logInformation: boolean): void {
		this.script.broadcastEvent(EventType.ScriptLoggerConfig, {log_errors: logErrors, log_warnings: logWarnings, log_information: logInformation});
	}
}
