import { LivingEntity } from "./LivingEntity";

export class Vindicator extends LivingEntity {

	/**
	 * Sets the vindicator to be aggro.
	 * @param value True if aggro
	 */
	setAggro(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_aggro" : "minecraft:stop_aggro");
	}

	/**
	 * Sets the vindicator to be johhny.
	 * @param value True if johnny
	 */
	setJohnny(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_johnny" : "minecraft:stop_johnny");
	}

	/**
	 * Sets this entity to celebrate after a raid.
	 * @param value True to celebrate
	 */
	setCelebrating(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_celebrating" : "minecraft:stop_celebrating");
	}
}
