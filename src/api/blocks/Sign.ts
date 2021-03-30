import { GroundSignDirection } from "./types/GroundSignDirection";
import { MultipleFacing } from "./data/MultipleFacing";

export class GroundSign {

	/**
	 * The direction the sign is facing on the ground.
	 */
	ground_sign_direction: GroundSignDirection = GroundSignDirection.South;

}

export class WallSign implements MultipleFacing {

	/**
	 * The direction the block is facing. For example, a block facing east is attached to a block to its west.
	 * Opposite from the direction a player faces when placing the block.
	 * Allowed values: 0-5.
	 * @default 2.
	 */
	facing_direction: number = 2;

}
