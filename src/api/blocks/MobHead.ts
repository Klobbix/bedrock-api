import { MultipleFacing } from "./data/MultipleFacing";

export class MobHead implements MultipleFacing {
	/**
	 * 0-3:
	 * The skull is attached to this side of a block, and the skull's eyes look in this direction.
	 * The direction from the block the skull is attached to, to the skull.
	 * 4: The skull sits on the floor.
	 * 5: Not accessible by placing the mob head item.
	 * Appears as an east-facing skull, but with the hit-box of an up-facing skull.
	 */
	facing_direction: number = 0;

	/**
	 * If true, the skull does not drop as an item.
	 */
	nodrop_bit: number = 0;

}
