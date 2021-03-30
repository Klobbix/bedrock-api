import { LivingEntity } from "./LivingEntity";

export class Player extends LivingEntity {

	/**
	 * Adds a bad omen or removes all bad omens.
	 * @param gain True to gain a bad omen
	 */
	badOmen(gain: boolean): void {
		this.triggerEvent(gain ? "minecraft:gain_bad_omen" : "minecraft:clear_add_bad_omen");
	}

	/**
	 * Triggers a raid or ends a raid.
	 * @param value True to start a raid
	 */
	triggerRaid(value: boolean): void {
		this.triggerEvent(value ? "minecraft:trigger_raid" : "minecraft:remove_raid_trigger");
	}
}
