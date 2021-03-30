import { LivingEntity } from "./LivingEntity";

export class EnderDragon extends LivingEntity {

	/**
	 * Sets the ender dragon to fly or sit.
	 * @param flying True to fly, false to sit
	 */
	setFlying(flying: boolean): void {
		this.triggerEvent(flying ? "minecraft:start_fly" : "minecraft:start_land");
	}

	/**
	 * Starts the death sequence of the ender dragon.
	 */
	die(): void {
		this.triggerEvent("minecraft:start_death");
	}
}
