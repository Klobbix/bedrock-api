/**
 * Interface representing the bindings for a Minecraft Event.
 */
declare interface EventBindings {

	broadcastEvent<T = any>(identifier: string, data: EventData<T>): boolean | null;

	createEventData<T = any>(identifier: string): EventData<T> | null;

	listenForEvent<T = any>(identifier: string, callback: (eventData: EventData<T>) => void): boolean | null;

	registerEventData<T = any>(identifier: string, data: T): true | null;
}
