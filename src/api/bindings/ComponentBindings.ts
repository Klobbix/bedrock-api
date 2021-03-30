/**
 * Interface representing the bindings for a Minecraft Component.
 */
declare interface ComponentBindings {

	applyComponentChanges<T>(entity: Entity | Block, component: Component<T>): true | null;

	createComponent<T>(entity: Entity, identifier: string): Component<T> | null;

	destroyComponent(entity: Entity, identifier: string): true | null;

	getComponent<T>(entity: Entity | Block, identifier: string): Component<T> | null;

	hasComponent(entity: Entity, identifier: string): boolean | null;

	registerComponent(identifier: string, data: object): boolean;

}
