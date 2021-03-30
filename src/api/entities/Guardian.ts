import { LivingEntity } from "./LivingEntity";

export class Guardian extends LivingEntity {

	/**
	 * Sets this guardian to be aggressive or passive.
	 * @param value True to be aggressive
	 */
	setAggressive(value: boolean): void {
		this.triggerEvent(value ? "minecraft:target_too_close" : "minecraft:target_far_enough");
	}
}
