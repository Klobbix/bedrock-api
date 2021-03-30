import { LivingEntity } from "./LivingEntity";

export class SnowGolem extends LivingEntity {
	/**
	 * Shears a snow golem.
	 */
	setSheared(): void {
		this.triggerEvent("on_sheared");
	}
}
