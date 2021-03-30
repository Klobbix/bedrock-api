import { BedrockEntity } from "./BedrockEntity";
import { ComponentType } from "../types/ComponentType";

export abstract class LivingEntity extends BedrockEntity {

	/**
	 * Returns the attack damage range of the entity.
	 */
	getAttackDamage() {
		let damage: Component<AttackComponent> = this.getComponent(ComponentType.Attack);
		return damage.data.damage;
	}

	/**
	 * Returns the current health of the entity.
	 */
	getCurrentHealth(): number {
		let curHealth: Component<HealthComponent> = this.getComponent(ComponentType.Health);
		return curHealth.data.value;
	}

	/**
	 * Returns an array of the entity's armor contents from head to foot.
	 */
	getArmorContents(): ItemStack[] {
		let armor: Component<ArmorContainerComponent> = this.getComponent(ComponentType.ArmorContainer);
		return armor.data;
	}

	/**
	 * Returns the helmet equipped on an entity.
	 */
	getHelmet(): ItemStack {
		return this.getArmorContents()[0];
	}

	/**
	 * Returns the chestplate equipped on an entity.
	 */
	getChestplate(): ItemStack {
		return this.getArmorContents()[1];
	}

	/**
	 * Returns the leggings equipped on an entity.
	 */
	getLeggings(): ItemStack {
		return this.getArmorContents()[2];
	}

	/**
	 * Returns the boots equipped on an entity.
	 */
	getBoots(): ItemStack {
		return this.getArmorContents()[3];
	}

	/**
	 * Returns the item equipped in the main hand on an entity.
	 */
	getItemInMainHand(): ItemStack {
		let items: Component<HandContainerComponent> = this.getComponent(ComponentType.HandContainer);
		return items.data[0];
	}

	/**
	 * Returns the item equipped in the off hand on an entity.
	 */
	getItemInOffHand(): ItemStack {
		let items: Component<HandContainerComponent> = this.getComponent(ComponentType.HandContainer);
		return items.data[1];
	}

	/**
	 * Returns the items in the player's hotbar.
	 */
	getItemsInHotbar(): ItemStack[] {
		let items: Component<HotbarContainerComponent> = this.getComponent(ComponentType.HotbarContainer);
		return items.data;
	}

	/**
	 * Returns the maximum health of an entity.
	 */
	getMaxHealth(): number {
		let curHealth: Component<HealthComponent> = this.getComponent(ComponentType.Health);
		return curHealth.data.max;
	}

	/**
	 * Returns the entity's custom name.
	 */
	getCustomName(): string {
		let curName: Component<NameableComponent> = this.getComponent(ComponentType.Nameable);
		return curName.data.name;
	}

	/**
	 * Sets the target of an entity.
	 * @param filter The entities to filter
	 * @param radius The search radius in which a target will be valid
	 */
	setTarget(filter: Filter, radius: number = 10): void {
		let look: Component<LookAtComponent> = this.createComponent(ComponentType.LookAt);
		look.data.set_target = true;
		look.data.filters = filter;
		look.data.search_radius = radius;
		this.system.applyComponentChanges(this.entity, look);
	}

	/**
	 * Sets the attack damage of the entity.
	 * @param min The minimum amount of damage
	 * @param max The maximum amount of damage
	 */
	setAttackDamage(min: number, max: number): void {
		let damage: Component<AttackComponent> = this.createComponent(ComponentType.Attack);
		damage.data.damage = [min, max];
		this.system.applyComponentChanges(this.entity, damage);
	}

	/**
	 * Gives the entity a custom name.
	 * @param name The name to give the entity
	 */
	setCustomName(name: string): void {
		let curName: Component<NameableComponent> = this.createComponent(ComponentType.Nameable);
		curName.data.name = name;
		this.system.applyComponentChanges(this.entity, curName);
	}

	/**
	 * Sets the health of the entity.
	 * @param value The current health of the entity
	 * @param max The maximum health of the entity
	 */
	setHealth(value: number, max: number): void {
		let curHealth: Component<HealthComponent> = this.createComponent(ComponentType.Health);
		curHealth.data.value = value;
		curHealth.data.max = max;
		this.system.applyComponentChanges(this.entity, curHealth);
	}

	/**
	 * Allows this entity to spawn other entities like a chicken drops eggs.
	 * @param identifier The new entity to spawn
	 * @param amount The amount of entities to spawn
	 */
	spawnEntity(identifier: string, amount: number = 1) {
		let spawn: Component<SpawnEntityComponent> = this.createComponent(ComponentType.SpawnEntity);
		spawn.data.spawn_entity = identifier;
		spawn.data.num_to_spawn = amount;
		spawn.data.single_use = true;
		this.system.applyComponentChanges(this.entity, spawn);
	}

	/**
	 * Allows this entity to spawn an item like a chicken drops eggs.
	 * @param identifier The new item to spawn
	 * @param amount The amount of items to spawn
	 */
	spawnItem(identifier: string, amount: number = 1) {
		let spawn: Component<SpawnEntityComponent> = this.createComponent(ComponentType.SpawnEntity);
		spawn.data.spawn_item = identifier;
		spawn.data.spawn_entity = "";
		spawn.data.num_to_spawn = amount;
		spawn.data.single_use = true;
		this.system.applyComponentChanges(this.entity, spawn);
	}

}
