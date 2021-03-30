/**
 * This event is used to turn various levels of logging on and off for client scripts.
 * Note that turning logging on/off is not limited to the script that broadcasted the event.
 * It will affect ALL client scripts including those in other Behavior Packs that are applied to the world.
 * See the Debugging section for more information on logging.
 */
declare interface ScriptLoggerConfigEvent {
	/**
	 * Set to true to log any scripting errors that occur on the client
	 * @default false
	 */
	log_errors: boolean;
	/**
	 * Set to true to log any general scripting information that occurs on the client. This includes any logging done with client.log()
	 * @default false
	 */
	log_information: boolean;
	/**
	 * Set to true to log any scripting warnings that occur on the client
	 * @default false
	 */
	log_warnings: boolean;
}
