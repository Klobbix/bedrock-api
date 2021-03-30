/**
 * This event is used to send UI events to the UI Engine for the specific player running the script.
 * After the event is triggered, the UI event will be sent immediately.
 * Custom UI is based on HTML 5.
 * Review the scripting demo for an example of a custom UI file.
 */
declare interface SendUIEventEvent {
	/**
	 * The data for the UI event being triggered
	 */
	data: string;
	/**
	 * The identifier of the UI event
	 */
	eventIdentifier: string;
}
