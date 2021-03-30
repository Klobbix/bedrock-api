import { LivingEntity } from "./LivingEntity";

export class Creeper extends LivingEntity {

	/**
	 * Sets this creeper to explode or be calm.
	 * @param value True to have the creeper start exploding
	 */
	setExploding(value: boolean) {
		this.triggerEvent(value ? "minecraft:start_exploding" : "minecraft:stop_exploding");
	}
}
