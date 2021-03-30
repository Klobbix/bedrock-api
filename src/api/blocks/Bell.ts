import { AttachmentType } from "./types/AttachmentType";
import { Attachable } from "./data/Attachable";
import { Directional } from "./data/Directional";

export class Bell implements Attachable, Directional {
	/**
	 * What the bell is attached to.
	 */
	attachment: AttachmentType = AttachmentType.Standing;

	/**
	 * The direction the bell is facing.
	 * Opposite from the direction the player faces when placing a bell.
	 */
	direction: number = 0;

	/**
	 * Whether the bell is rung.
	 * Allowed values: 0-1.
	 * @default 0
	 */
	toggle_bit: number = 0;
}
