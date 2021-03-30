import { LivingEntity } from "./LivingEntity";

export class Ravager extends LivingEntity {

	/**
	 * Sets the ravager to roar.
	 * @param value True to roar, false to stop
	 */
	roar(value: boolean) {
		this.triggerEvent(value ? "minecraft:start_roar" : "minecraft:end_roar");
	}

	/**
	 * Sets this entity to celebrate after a raid.
	 * @param value True to celebrate
	 */
	setCelebrating(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_celebrating" : "minecraft:stop_celebrating");
	}

}
