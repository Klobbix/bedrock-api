import { LivingEntity } from "./LivingEntity";

export class IronGolem extends LivingEntity {

	/**
	 * Sets whether this iron golem was built by a player or not.
	 * @param value True to set the iron golem as player created
	 */
	setPlayerCreated(value: boolean): void {
		this.triggerEvent(value ? "minecraft:from_player" : "minecraft:from_village");
	}
}
