declare interface ClientSystem<T> extends System<T>, BlockBindings, ComponentBindings, EntityBindings, EventBindings, LoggingBindings, QueryBindings {
}

declare interface VanillaClientSystem extends ClientSystem<VanillaClientSystem> {

}
