import { LivingEntity } from "./LivingEntity";

export class Rabbit extends LivingEntity {

	/**
	 * Sets the coat of the rabbit.
	 * @param coat The coat type
	 */
	setCoat(coat: RabbitCoat): void {
		this.triggerEvent(coat);
	}

	/**
	 * Sets this rabbit to be a baby or an adult.
	 * @param value True to set the rabbit to a baby
	 */
	setBaby(value: boolean): void {
		this.triggerEvent(value ? "minecraft:entity_born" : "minecraft:entity_spawned");
	}
}

export enum RabbitCoat {
	Desert = "in_desert",
	Snow = "in_snow",
}
