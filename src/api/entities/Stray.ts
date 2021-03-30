import { LivingEntity } from "./LivingEntity";

export class Stray extends LivingEntity {

	/**
	 * Transforms this entity into a skeleton.
	 */
	transform(): void {
		this.triggerEvent("change_to_skeleton");
	}

	/**
	 * Sets the attack mode of the stray.
	 * @param melee True to use melee, false to use ranged
	 */
	setAttackMode(melee: boolean): void {
		this.triggerEvent(melee ? "minecraft:melee_mode" : "minecraft:ranged_mode");
	}
}
