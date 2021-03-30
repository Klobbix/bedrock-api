import { AttachmentType } from "../types/AttachmentType";

export interface Attachable {
	/**
	 * What the block is attached to.
	 */
	attachment: AttachmentType;
}
