declare interface ServerSystem<T> extends System<T>, BlockBindings, CommandBindings, ComponentBindings,
	EntityBindings, EventBindings, LoggingBindings, QueryBindings {
}

declare interface VanillaServerSystem extends ServerSystem<VanillaServerSystem> {

}
