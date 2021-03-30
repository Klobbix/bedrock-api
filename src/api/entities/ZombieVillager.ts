import { LivingEntity } from "./LivingEntity";

export class ZombieVillager extends LivingEntity {

	/**
	 * Converts this zombie villager to a villager.
	 */
	convert(): void {
		this.triggerEvent("villager_converted");
	}

	/**
	 * Converts this zombie villager to a cleric.
	 */
	becomeCleric(): void {
		this.triggerEvent("minecraft:become_cleric");
	}
}
