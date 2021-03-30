/**
 * Represents Event identifier strings for use in the EventBindings class.
 */
export enum EventType {

	/** Listening Events **/
	ClientEnteredWorld = "minecraft:client_entered_world",
	HitResultChanged = "minecraft:hit_result_changed",
	HitResultContinuous = "minecraft:hit_result_continuous",
	PickHitResultChanged = "minecraft:pick_hit_result_changed",
	PickHitResultContinuous = "minecraft:pick_hit_result_continuous",

	/** Triggerable Events **/
	DisplayChat = "minecraft:display_chat_event",
	ExecuteCommand = "minecraft:execute_command",
	LoadUi = "minecraft:load_ui",
	ScriptLoggerConfig = "minecraft:script_logger_config",
	SendUiEvent = "minecraft:send_ui_event",
	SpawnParticleAttachedEntity = "minecraft:spawn_particle_attached_entity",
	SpawnParticleInWorld = "minecraft:spawn_particle_in_world",
	UnloadUi = "minecraft:unload_ui",

	/** Server Events **/
	BlockDestructionStarted = "minecraft:block_destruction_started",
	BlockDestructionStopped = "minecraft:block_destruction_stopped",
	BlockExploded = "minecraft:block_exploded",
	BlockInteractedWith = "minecraft:block_interacted_with",
	EntityAcquiredItem = "minecraft:entity_acquired_item",
	EntityAttack = "minecraft:entity_attack",
	EntityCarriedItemChanged = "minecraft:entity_carried_item_changed",
	EntityBorn = "minecraft:entity_born",
	EntityCreated = "minecraft:entity_created",
	EntityDeath = "minecraft:entity_death",
	EntityDefinitionEvent = "minecraft:entity_definition_event",
	EntityDroppedItem = "minecraft:entity_dropped_item",
	EntityEquippedArmor = "minecraft:entity_equipped_armor",
	EntityHurt = "minecraft:entity_hurt",
	EntitySneak = "minecraft:entity_sneak",
	EntitySpawned = "minecraft:entity_spawned",
	EntityStartRiding = "minecraft:entity_start_riding",
	EntityStopRiding = "minecraft:entity_stop_riding",
	EntityTick = "minecraft:entity_tick",
	EntityTransformed = "minecraft:entity_transformed",
	EntityUseItem = "minecraft:entity_use_item",
	OnPrime = "minecraft:on_prime",
	PistonMovedBlock = "minecraft:piston_moved_block",
	PlaySound = "minecraft:play_sound",
	PlayerAttackedEntity = "minecraft:player_attacked_entity",
	PlayerDestroyedBlock = "minecraft:player_destroyed_block",
	PlayerPlacedBlock = "minecraft:player_placed_block",
	ProjectileHit = "minecraft:projectile_hit",
	WeatherChanged = "minecraft:weather_changed",
}
