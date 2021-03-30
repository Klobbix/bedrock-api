import { LivingEntity } from "./LivingEntity";

export class Skeleton extends LivingEntity {

	/**
	 * Sets the attack mode of the skeleton.
	 * @param melee True if melee, false if ranged
	 */
	setAttackMode(melee: boolean): void {
		this.triggerEvent(melee ? "minecraft:melee_mode" : "minecraft:ranged_mode");
	}
}
