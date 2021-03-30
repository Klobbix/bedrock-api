import { Directional } from "./data/Directional";

export class EndPortalFrame implements Directional {
	/**
	 * The direction of the end portal frame block.
	 * The opposite from the direction the player faces while placing the block.
	 * In order to activate a portal, all 12 blocks must be facing inward; for example, the northern three blocks must all face south.
	 * Allowed values: 0-3.
	 * @default 0.
	 */
	direction: number = 0;

	/**
	 * If the portal frame block contains an eye of ender.
	 * Allowed values: 0-1.
	 * @default 0
	 */
	end_portal_eye_bit: number = 0;

}
