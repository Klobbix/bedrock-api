import { ComponentType } from "../types/ComponentType";
import { EventType } from "../types/EventType";

export abstract class BedrockEntity {

	system: VanillaServerSystem | VanillaClientSystem;
	entity: Entity;

	constructor(system: VanillaServerSystem | VanillaClientSystem, entity: Entity | string) {
		this.system = system;
		if (typeof entity == "object") {
			this.entity = entity;
		} else {
			this.entity = this.system.createEntity("entity", entity);
		}
	}

	/**
	 * Destroys the current entity.
	 * @return True if destroyed successfully
	 */
	destroy(): boolean {
		return this.system.destroyEntity(this.entity);
	}

	/**
	 * Returns the array of entity tags that an entity may have.
	 */
	getTags(): any {
		let tags = this.getComponent(ComponentType.Tag);
		return tags.data;
	}

	/**
	 * Trigger events that Entity Definition JSON files are listening for.
	 */
	triggerEvent(event: string): boolean {
		const data = this.system.createEventData(EventType.EntityDefinitionEvent);
		data.data = Object.assign({}, data.data, {entity: this.entity, event: event});
		return this.system.broadcastEvent(EventType.EntityDefinitionEvent, data);
	}

	/**
	 * Returns the ticking area that this entity exists in.
	 */
	getTickingArea(): TickWorldComponent {
		let area: Component<TickWorldComponent> = this.getComponent(ComponentType.TickWorld);
		return area.data;
	}

	/**
	 * Returns the ticking area's region.
	 */
	getTickingAreaDescription(): TickingAreaDescriptionComponent {
		let area: Component<TickingAreaDescriptionComponent> = this.getComponent(ComponentType.TickingAreaDescription);
		return area.data;
	}

	/**
	 * Creates the specified component and adds it to the entity.
	 * This should only be used with custom components which need to be registered first.
	 * If the entity already has the component, this will retrieve the component already there instead.
	 * @param identifier The identifier of the component to add to the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent()
	 */
	createComponent(identifier: string): Component<any> {
		return this.system.createComponent(this.entity, identifier);
	}

	/**
	 * Removes the specified component from the given entity. If the entity has the component, it will be removed. Currently this only works with custom components and can't be used to remove components defined for an entity in JSON.
	 * @param identifier The identifier of the component to remove from the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent()
	 */
	destroyComponent(identifier: string): boolean {
		return this.system.destroyComponent(this.entity, identifier);
	}

	/**
	 * Looks for the specified component in the entity. If it exists, retrieves the data from the component and returns it.
	 * @param identifier The identifier of the component to retrieve from the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent()
	 */
	getComponent(identifier: string): Component<any> {
		return this.system.getComponent(this.entity, identifier);
	}

	/**
	 * Checks if the given entity has the specified component.
	 * @param identifier The identifier of the component to check on the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent()
	 */
	hasComponent(identifier: string): boolean {
		return this.system.hasComponent(this.entity, identifier);
	}

	/**
	 * Applies the component and any changes made to it in script back to the entity. What this means for each component can be slightly different: it makes the component reload on the entity with the new data as if it had just been added to the entity.
	 * @param component The component object retrieved from the entity that was returned by either createComponent() or getComponent()
	 */
	applyComponentChanges(component: Component<any>): boolean {
		return this.system.applyComponentChanges(this.entity, component);
	}

	/**
	 * Returns the system registered with this entity.
	 */
	getSystem(): VanillaServerSystem | VanillaClientSystem {
		return this.system;
	}

	handle(): Entity {
		return this.entity;
	}

	/**
	 * Returns the entity's id.
	 */
	getId(): number {
		return this.entity.id;
	}

	/**
	 * Returns the entity type (entity or item_entity);
	 */
	getType(): string {
		return this.entity.__type__;
	}

	/**
	 * Returns the unique identifier of the entity.
	 */
	getIdentifier(): string {
		return this.entity.__identifier__;
	}

	/**
	 * Returns the current position of the entity.
	 */
	getPosition(): Vector {
		let pos: Component<PositionComponent> = this.getComponent(ComponentType.Position);
		return pos.data;
	}

	/**
	 * Returns the current rotation of the entity.
	 */
	getRotation(): Rotation {
		let rotation: Component<RotationComponent> = this.getComponent(ComponentType.Rotation);
		return {x: rotation.data.x, y: rotation.data.y};
	}

	/**
	 * Returns the collision box of the entity.
	 */
	getCollisionBox(): CollisionBox {
		let box: Component<CollisionBoxComponent> = this.getComponent(ComponentType.CollisionBox);
		return {width: box.data.width, height: box.data.height};
	}

	/**
	 * Sets the collision box of the entity.
	 * @param width The width of the box
	 * @param height The height of the box
	 */
	setCollisionBox(width: number, height: number): void {
		let box: Component<CollisionBoxComponent> = this.createComponent(ComponentType.CollisionBox);
		box.data.width = width;
		box.data.height = height;
		this.system.applyComponentChanges(this.entity, box);
	}

	/**
	 * Returns whether or not the entity's custom name is always showing.
	 */
	getCustomNameVisible(): boolean {
		let curName: Component<NameableComponent> = this.getComponent(ComponentType.Nameable);
		return curName.data.always_show;
	}

	/**
	 * Sets the custom name of the entity to always show.
	 * @param visible True to always show the entity's custom name
	 */
	setCustomNameVisible(visible: boolean): void {
		let curName: Component<NameableComponent> = this.createComponent(ComponentType.Nameable);
		curName.data.always_show = visible;
		this.system.applyComponentChanges(this.entity, curName);
	}

	/**
	 * Checks if the given EntityObject corresponds to a valid entity.
	 */
	isValid(): boolean {
		return this.system.isValidEntity(this.entity);
	}

	/**
	 * Teleports the entity to a provided position.
	 * @param position The position to teleport the entity to
	 */
	teleport(position: Vector): void {
		let pos: Component<PositionComponent> = this.getComponent(ComponentType.Position);
		pos.data.x = position.x;
		pos.data.y = position.y;
		pos.data.z = position.z;
		this.system.applyComponentChanges(this.entity, pos);
	}
}
