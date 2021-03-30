/**
 * Interface representing the bindings for logging to the OS.
 */
declare interface LoggingBindings {

	/**
	 * The log function is accessed through the server or client objects and allows for logging a message to the ContentLog file.
	 * On Windows 10 devices it is located at ' %APPDATA%\..\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs '.
	 * @param message The message to log
	 */
	log(message: string): void;
}
