import { LivingEntity } from "./LivingEntity";

export class EvocationIllager extends LivingEntity {

	/**
	 * Sets this entity to celebrate after a raid.
	 * @param value True to celebrate
	 */
	setCelebrating(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_celebrating" : "minecraft:stop_celebrating");
	}
}
