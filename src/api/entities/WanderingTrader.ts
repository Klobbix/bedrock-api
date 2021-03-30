import { LivingEntity } from "./LivingEntity";

export class WanderingTrader extends LivingEntity {

	/**
	 * Sets this trader to be scared or calm.
	 * @param value True if scared
	 */
	setScared(value: boolean): void {
		this.triggerEvent(value ? "minecraft:become_scared" : "minecraft:become_calm");
	}
}
