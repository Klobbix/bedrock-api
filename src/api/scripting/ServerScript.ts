import { AbstractSystem } from "../models/AbstractSystem";
import { HelperWrapper } from "./HelperWrapper";
import { EventType } from "../types/EventType";

const aServerSystem = server.registerSystem(0, 0);

export abstract class ServerScript extends AbstractSystem<VanillaServerSystem> {

	serverSystem = aServerSystem;
	helpers = new HelperWrapper(this);

	constructor() {
		super(aServerSystem);
	}

	abstract initialize(): void;

	abstract shutdown(): void;

	abstract update(): void;

	/**
	 * Returns the system being used in this script.
	 */
	system() {
		return this.serverSystem;
	}

	/**
	 * Broadcasts an event with provided properties data.
	 * @param identifier The identifier of the event
	 * @param properties The properties to send with the event
	 */
	broadcastEvent(identifier: string, properties) {
		const data = this.serverSystem.createEventData(identifier);
		data.data = Object.assign({}, data.data, properties);
		return this.serverSystem.broadcastEvent(identifier, data);
	}

	/**
	 * Executes a command.
	 * @param command The command to send
	 */
	performCommand(command: string) {
		if (!command.startsWith("/")) {
			command = "/" + command;
		}
		this.helpers.messaging.performCommand(command);
	}

	/**
	 * Outputs objects of any type into the chat window.
	 * @param items The items to log
	 */
	messageObjects(...items: any) {
		const toString = item => {
			switch (Object.prototype.toString.call(item)) {
				case '[object Undefined]':
					return 'undefined';
				case '[object Null]':
					return 'null';
				case '[object String]':
					return `"${item}"`;
				case '[object Array]':
					const array = item.map(toString);
					return `[${array.join(', ')}]`;
				case '[object Object]':
					const object = Object.keys(item).map(key => `${key}: ${toString(item[key])}`);
					return `{${object.join(', ')}}`;
				case '[object Function]':
					return item.toString();
				default:
					return item;
			}
		};

		this.broadcastEvent(EventType.DisplayChat, {message: items.map(toString).join(' ')});
	}

	/**
	 * Sends a message in the chat window.
	 * @param message The message to send
	 */
	message(message: string) {
		this.helpers.messaging.message(message);
	}

}
