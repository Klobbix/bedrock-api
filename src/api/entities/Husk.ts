import { LivingEntity } from "./LivingEntity";

export class Husk extends LivingEntity {

	/**
	 * Transforms this husk back into a zombie.
	 * @param value True to start transforming, false to stop
	 */
	setTransforming(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_transforming" : "minecraft:stop_transforming");
	}
}
