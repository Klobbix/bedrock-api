import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";
import { ComponentType } from "../../types/ComponentType";

export class EntityHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * Returns all entities in the current loaded chunk.
	 */
	getAll(): Entity[] {
		let allQuery = this.script.system().registerQuery();
		return this.script.system().getEntitiesFromQuery(allQuery);
	}

	/**
	 * Returns all entities in the current loaded chunk for a given single filter.
	 * @param filter The component filter
	 * @see ComponentType.ts
	 */
	getAllByFilter(filter: string): Entity[] {
		let filteredQuery = this.script.system().registerQuery();
		this.script.system().addFilterToQuery(filteredQuery, filter);
		return this.script.system().getEntitiesFromQuery(filteredQuery);
	}

	/**
	 * Returns all entities in the current loaded chunk for multiple filters.
	 * @param filters The component filters
	 * @see ComponentType.ts
	 */
	getAllByFilters(filters: string[]): Entity[] {
		let filteredQuery = this.script.system().registerQuery();
		for (let s in filters) {
			this.script.system().addFilterToQuery(filteredQuery, s);
		}
		return this.script.system().getEntitiesFromQuery(filteredQuery);
	}

	/**
	 * Returns all entities near the player for a given radius.
	 * @param entity The EntityObject that was retrieved from a call to createEntity() or retrieved from an event
	 * @param radius The radius of blocks to search
	 */
	getAllNearEntity(entity: Entity, radius: number): Entity[] {
		let spacial_query = this.script.system().registerQuery("minecraft:position", "x", "y", "z");
		let player_pos_component: Component<PositionComponent> = this.script.system().getComponent(entity, ComponentType.Position);
		let pos = player_pos_component.data;
		return this.script.system().getEntitiesFromQuery(spacial_query, pos.x - radius, pos.x + radius, pos.y - radius, pos.y + radius, pos.z - radius, pos.z + radius);
	}

	/**
	 * Controls the collision box of the entity.
	 * When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions.
	 * WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
	 *
	 * @param entity The entity to transform
	 * @param width Width and Depth of the collision box in blocks. A negative value will be assumed to be 0
	 * @param height Height of the collision box in blocks. A negative value will be assumed to be 0
	 */
	setCollisionBox(entity: Entity, width: number, height: number): void {
		let box: Component<CollisionBoxComponent> = this.script.system().createComponent(entity, ComponentType.CollisionBox);
		box.data.width = width;
		box.data.height = height;
		this.script.system().applyComponentChanges(entity, box);
	}

	/**
	 * Sets a custom name for a given entity.
	 * @param entity The entity to set the name of
	 * @param name The name to give the entity
	 * @param alwaysShow If true, the name will always be shown
	 */
	setCustomName(entity: Entity, name: string, alwaysShow: boolean): void {
		let eName: Component<NameableComponent> = this.script.system().createComponent(entity, ComponentType.Nameable);
		eName.data.always_show = alwaysShow;
		eName.data.name = name;
		this.script.system().applyComponentChanges(entity, eName);
	}

	/**
	 * Returns the entity's current position as a Vector.
	 * @param entity The entity to get the position of
	 */
	getPosition(entity: Entity): Vector {
		let pos: Component<PositionComponent> = this.script.system().createComponent(entity, ComponentType.Position);
		return {x: pos.data.x, y: pos.data.y, z: pos.data.z};
	}

	/**
	 * Teleports an entity to a given position.
	 * @param entity The entity to teleport
	 * @param position The position to teleport the entity to
	 */
	teleport(entity: Entity, position: Vector): void {
		let pos: Component<PositionComponent> = this.script.system().createComponent(entity, ComponentType.Position);
		pos.data.x = position.x;
		pos.data.y = position.y;
		pos.data.z = position.z;
		this.script.system().applyComponentChanges(entity, pos);
	}

	/**
	 * Returns the current rotation of an entity.
	 * @param entity The entity to get the rotation of
	 */
	getRotation(entity: Entity): Rotation {
		let rotation: Component<RotationComponent> = this.script.system().createComponent(entity, ComponentType.Rotation);
		return {x: rotation.data.x, y: rotation.data.y};
	}

	/**
	 * Returns the current health of an entity.
	 * @param entity The entity
	 */
	getCurrentHealth(entity: Entity): number {
		let curHealth: Component<HealthComponent> = this.script.system().createComponent(entity, ComponentType.Health);
		return curHealth.data.value;
	}

	/**
	 * Returns the maximum health of an entity.
	 * @param entity The entity
	 */
	getMaxHealth(entity: Entity): number {
		let curHealth: Component<HealthComponent> = this.script.system().createComponent(entity, ComponentType.Health);
		return curHealth.data.max;
	}

	/**
	 * Sets the health values for a given entity.
	 * @param entity The entity
	 * @param value Current health of the entity
	 * @param max The maximum health the entity can heal
	 */
	setHealth(entity: Entity, value: number, max: number): void {
		let curHealth: Component<HealthComponent> = this.script.system().createComponent(entity, ComponentType.Health);
		curHealth.data.value = value;
		curHealth.data.max = max;
		this.script.system().applyComponentChanges(entity, curHealth);
	}

	/**
	 * Sets the attack damage range that an entity can deal.
	 * Once the changes are applied, the current attack of the entity will be reset to the minimum specified with the minimum and maximum changed to the values specified.
	 * Any buffs or debuffs will be left intact.
	 * @param entity The entity to modify
	 * @param range The attack range.
	 *
	 */
	setAttackDamage(entity: Entity, range: MinecraftRange): void {
		let attack: Component<AttackComponent> = this.script.system().createComponent(entity, ComponentType.Attack);
		attack.data.damage = range;
		this.script.system().applyComponentChanges(entity, attack);
	}

	/**
	 * Returns the current rotation of an entity.
	 * @param entity The entity
	 * @param rotation The rotation to set the entity to
	 */
	setRotation(entity: Entity, rotation: Rotation): void {
		let curRotation: Component<RotationComponent> = this.script.system().createComponent(entity, ComponentType.Rotation);
		curRotation.data.x = rotation.x;
		curRotation.data.y = rotation.y;
		this.script.system().applyComponentChanges(entity, curRotation);
	}

	/**
	 * Creates an entity of a given type.
	 * @param identifier The entity to create
	 * @see EntityType.ts
	 */
	create(identifier: string): Entity {
		return this.script.system().createEntity("entity", identifier);
	}

	/**
	 * Destroys an entity
	 * @param entity The entity to destroy
	 * @return True if destroyed successfully
	 */
	destroy(entity: Entity): boolean {
		return this.script.system().destroyEntity(entity);
	}

	/**
	 * Causes this entity to explode like a creeper.
	 * @param entity The entity to explode
	 * @param fuseLength The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate
	 * @param power The radius of the explosion in blocks and the amount of damage the explosion deals
	 * @param fuseLit If true, the fuse is already lit when this component is added to the entity
	 * @param causesFire If true, blocks in the explosion radius will be set on fire
	 * @param breaksBlocks If true, the explosion will destroy blocks in the explosion radius
	 */
	explode(entity: Entity, fuseLength: MinecraftRange, power: number, fuseLit: boolean, causesFire: boolean, breaksBlocks: boolean) {
		let explode: Component<ExplodeComponent> = this.script.system().createComponent(entity, ComponentType.Explode);
		explode.data.fuse_length = fuseLength;
		explode.data.power = power;
		explode.data.fuse_lit = fuseLit;
		explode.data.causes_fire = causesFire;
		explode.data.breaks_blocks = breaksBlocks;
		this.script.system().applyComponentChanges(entity, explode);
	}

	/**
	 * Makes the entity look at another entity.
	 * @param entity The entity that will perform the looking
	 * @param filter Defines the entities that can trigger this component
	 * @param radius Optional - Maximum distance this entity will look for another entity
	 */
	lookAt(entity: Entity, filter: Filter, radius?: number): void {
		let look: Component<LookAtComponent> = this.script.system().createComponent(entity, ComponentType.LookAt);
		look.data.filters = filter;
		this.script.system().applyComponentChanges(entity, look);
	}

	/**
	 * Makes the entity look at another entity.
	 * @param entity The entity that will perform the looking
	 * @param target
	 * @param radius Optional - Maximum distance this entity will look for another entity
	 */
	lookAtPlayer(entity: Entity, target: Entity, radius?: number): void {
		let look: Component<LookAtComponent> = this.script.system().createComponent(entity, ComponentType.LookAt);
		look.data.filters = {subject: "target", operator: "equals", value: target};
		this.script.system().applyComponentChanges(entity, look);
	}

	/**
	 * Sets the projectile that this entity fires.
	 * This doesn't allow the entity to use a ranged attack: it only defines what kind of projectile it shoots.
	 * @param entity The entity
	 * @param projectile Entity identifier to use as projectile for the ranged attack. The entity must have the projectile component to be able to be shot as a projectile
	 */
	setProjectile(entity: Entity, projectile: string) {
		let shot: Component<ShooterComponent> = this.script.system().createComponent(entity, ComponentType.Shooter);
		shot.data.def = projectile;
		this.script.system().applyComponentChanges(entity, shot);
	}

}
