import { LivingEntity } from "./LivingEntity";

export class Shulker extends LivingEntity {

	/**
	 * Sets the color of the shulker.
	 * @param color The color to set the shulker to
	 */
	setColor(color: ShulkerColor) {
		this.triggerEvent(color);
	}
}

export enum ShulkerColor {
	Black = "minecraft:turn_black",
	Blue = "minecraft:turn_blue",
	Brown = "minecraft:turn_brown",
	Cyan = "minecraft:turn_cyan",
	Gray = "minecraft:turn_gray",
	Green = "minecraft:turn_green",
	LightBlue = "minecraft:turn_light_blue",
	Lime = "minecraft:turn_line",
	Magenta = "minecraft:turn_magenta",
	Normal = "minecraft:entity_spawned",
	Orange = "minecraft:turn_orange",
	Pink = "minecraft:turn_pink",
	Purple = "minecraft:turn_purple",
	Red = "minecraft:turn_red",
	Silver = "minecraft:turn_silver",
	White = "minecraft:turn_white",
	Yellow = "minecraft:turn_yellow",

}
