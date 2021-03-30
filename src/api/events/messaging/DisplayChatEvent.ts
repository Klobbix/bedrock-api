/**
 * This event is used to display a chat message to the specific player that is running the client script.
 * The event data is the message to be displayed in plain text.
 * Special formatting is supported the same way it would be if a player was sending the message.
 */
declare interface DisplayChatEvent {
	/**
	 * The chat message that will be displayed
	 */
	message: string;
}
