import { LivingEntity } from "./LivingEntity";

export class Ocelot extends LivingEntity {

	/**
	 * Sets the ocelot to be a trusting baby or wild baby
	 * @param baby True if baby
	 * @param wild True if wild
	 */
	setBaby(baby: boolean, wild: boolean) {
		if (baby) {
			this.triggerEvent(wild ? "minecraft:entity_born_wild" : "minecraft:entity_born");
		} else {
			this.triggerEvent("minecraft:ageable_grow_up");
		}
	}
}
