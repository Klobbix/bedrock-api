/**
 * Interface representing the bindings for a Minecraft Entity.
 */
declare interface EntityBindings {

	createEntity(): Entity | null;

	/**
	 *
	 * @param type Specifies the type of the entity that is being created by the template. Valid inputs are `entity` and `item_entity`
	 * @param identifier
	 */
	createEntity(type: string, identifier: string): Entity | null;

	destroyEntity(entity: Entity): true | null;

	isValidEntity(entity: Entity): boolean | null;
}
