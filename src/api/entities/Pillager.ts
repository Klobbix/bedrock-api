import { LivingEntity } from "./LivingEntity";

export class Pillager extends LivingEntity {

	/**
	 * Sets this entity to celebrate after a raid.
	 * @param value True to celebrate
	 */
	setCelebrating(value: boolean): void {
		this.triggerEvent(value ? "minecraft:start_celebrating" : "minecraft:stop_celebrating");
	}

	/**
	 * Sets the attack mode of the pillager entity.
	 * @param melee True to use melee, false to use ranged
	 */
	setAttackMode(melee: boolean): void {
		this.triggerEvent(melee ? "minecraft:melee_mode" : "minecraft:ranged_mode");
	}

	/**
	 * Calms this pillager entity.
	 */
	calm(): void {
		this.triggerEvent("minecraft:calm");
	}
}
