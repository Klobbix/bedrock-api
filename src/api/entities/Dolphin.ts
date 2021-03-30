import { LivingEntity } from "./LivingEntity";

export class Dolphin extends LivingEntity {

	/**
	 * Sets this dolphin to be angry or calm.
	 * @param value True to make the dolphin angry
	 */
	setAngry(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_angry" : "minecraft:on_calm");
	}

	/**
	 * Sets the dryingout status of the dolphin.
	 * @param value True to set the dolphin to start drying
	 */
	setDryingout(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_dryingout" : "minecraft:stop_dryingout");
	}

	/**
	 * Sets the dryingout status of the dolphin.
	 * @param value True to set the dolphin to start drying
	 */
	setDriedOut(value: boolean): void {
		this.triggerEvent(value ? "minecraft:dried_out" : "minecraft:stop_dryingout");
	}

}
