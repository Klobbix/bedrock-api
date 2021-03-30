import { Minecart } from "./Minecart";

export class HopperMinecart extends Minecart {

	/**
	 * Activates or deactivates this hopper minecart.
	 * @param value True to activate
	 */
	activate(value: boolean): void {
		this.triggerEvent(value ? "minecraft:hopper_activate" : "minecraft:hopper_deactivate");
	}
}
