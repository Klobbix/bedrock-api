import { Directional } from "./data/Directional";
import { AttachmentType } from "./types/AttachmentType";
import { Attachable } from "./data/Attachable";

export class Grindstone implements Attachable, Directional {

	/**
	 * What the grindstone is attached to.
	 */
	attachment: AttachmentType = AttachmentType.Standing;

	/**
	 * The direction the grindstone is facing.
	 * Opposite from the direction the player faces when placing a grindstone.
	 */
	direction: number = 0;

}
