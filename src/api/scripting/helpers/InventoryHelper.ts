import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";
import { ComponentType } from "../../types/ComponentType";

export class InventoryHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * Returns the armor equipped on an entity.
	 * @param entity The entity
	 */
	getArmorContents(entity: Entity): ItemStack[] {
		let armor: Component<ArmorContainerComponent> = this.script.system().getComponent(entity, ComponentType.ArmorContainer);
		return armor.data;
	}

	/**
	 * Returns the helmet equipped on an entity.
	 * @param entity The entity
	 */
	getHelmet(entity: Entity): ItemStack {
		return this.getArmorContents(entity)[0];
	}

	/**
	 * Returns the chestplate equipped on an entity.
	 * @param entity The entity
	 */
	getChestplate(entity: Entity): ItemStack {
		return this.getArmorContents(entity)[1];
	}

	/**
	 * Returns the leggings equipped on an entity.
	 * @param entity The entity
	 */
	getLeggings(entity: Entity): ItemStack {
		return this.getArmorContents(entity)[2];
	}

	/**
	 * Returns the boots equipped on an entity.
	 * @param entity The entity
	 */
	getBoots(entity: Entity): ItemStack {
		return this.getArmorContents(entity)[3];
	}

	/**
	 * Returns the item equipped in the main hand on an entity.
	 * @param entity The entity
	 */
	getItemInMainHand(entity: Entity): ItemStack {
		let items: Component<HandContainerComponent> = this.script.system().getComponent(entity, ComponentType.HandContainer);
		return items.data[0];
	}

	/**
	 * Returns the item equipped in the off hand on an entity.
	 * @param entity The entity
	 */
	getItemInOffHand(entity: Entity): ItemStack {
		let items: Component<HandContainerComponent> = this.script.system().getComponent(entity, ComponentType.HandContainer);
		return items.data[1];
	}

	/**
	 * Returns the items in the player's hotbar.
	 * @param entity The entity
	 */
	getItemsInHotbar(entity: Entity): ItemStack[] {
		let items: Component<HotbarContainerComponent> = this.script.system().getComponent(entity, ComponentType.HotbarContainer);
		return items.data;
	}

	/**
	 * Returns an array of items that the entity has.
	 * NOTE: Currently items and containers are read-only.Slot 0-8 is the hotbar, 9-16 is the top row of the player's inventory, 17-24 is the middle row, 25-32 is the bottom row
	 * @param entity The entity to get the items from
	 */
	getAllItems(entity: Entity): ItemStack[] {
		let items: Component<ArmorContainerComponent> = this.script.system().getComponent(entity, ComponentType.InventoryContainer);
		return items.data;
	}
}
