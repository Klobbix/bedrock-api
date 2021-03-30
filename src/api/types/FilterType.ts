export enum FilterType {
	/**
	 * Compares the current time with a float value in the range (0.0, 1.0). 0.0= Noon 0.25= Sunset 0.5= Midnight 0.75= Sunrise
	 */
	ClockTime = "clock_time",

	/**
	 * Compares the distance to the nearest Player with a float value.
	 */
	DistanceToNearestPlayer = "distance_to_nearest_player",

	/**
	 * Returns true when the subject entity has the named ability.
	 * Values:
	 * flySpeed,flying,instabuild,invulnerable,lightning,mayfly,mute,noclip,walkSpeed,worldbuilder
	 */
	HasAbility = "has_ability",

	/**
	 * Tests whether the biome the subject is in has the specified tag.
	 * @see BiomeTagType.ts
	 */
	HasBiomeTag = "has_biome_tag",

	/**
	 * Returns true when the subject entity contains the named component.
	 * @see ComponentType.ts
	 */
	HasComponent = "has_component",

	/**
	 * Returns true when the subject entity receives the named damage type.
	 * @see DamageType.ts
	 */
	HasDamage = "has_damage",

	/**
	 * Tests for the presence of a named item (value) in the designated slot (domain) of the subject entity.
	 */
	HasEquipment = "has_equipment",

	/**
	 * Tests whether the subject has the specified mob effect.
	 */
	HasMobEffect = "has_mob_effect",

	/**
	 * Returns true when the subject entity is holding a ranged weapon like a bow or crossbow.
	 */
	HasRangedWeapon = "has_ranged_weapon",

	/**
	 * Returns true if the subject entity has the tag provided.
	 */
	HasTag = "has_tag",

	/**
	 * Returns true if the subject entity has a valid target.
	 */
	HasTarget = "has_target",

	/**
	 * Tests whether the target has any trade supply left. Will return false if the target cannot be traded with.
	 */
	HasTradeSupply = "has_trade_supply",

	/**
	 * Compares the current 24 hour time with an int value in the range[0, 24000].
	 */
	HourlyClockTime = "hourly_clock_time",

	/**
	 * Returns true if the subject entity is in a caravan.
	 */
	InCaravan = "in_caravan",

	/**
	 * Returns true when the subject entity is in the clouds.
	 */
	InClouds = "in_clouds",

	/**
	 * Returns true when the subject entity is in lava.
	 */
	InLava = "in_lava",

	/**
	 * Returns true when the subject entity is in Nether.
	 */
	InNether = "in_nether",

	/**
	 * Returns true when the subject entity is in water.
	 */
	InWater = "in_water",

	/**
	 * Returns true when the subject entity is in water or rain.
	 */
	InWaterOrRain = "in_water_or_rain",

	/**
	 * Tests if the specified duration in seconds of inactivity for despawning has been reached.
	 */
	InactivityTimer = "inactivity_timer",

	/**
	 * Tests the current altitude against a provided value. 0= bedrock elevation.
	 */
	IsAltitude = "is_altitude",

	/**
	 * Returns true if the subject entity is fleeing from other mobs.
	 */
	IsAvoidingMobs = "is_avoiding_mobs",

	/**
	 * Tests whether the Subject is currently in the named biome.
	 */
	IsBiome = "is_biome",

	/**
	 * Returns true when the block has the given family name.
	 */
	IsBlock = "is_block",

	/**
	 * Tests the current brightness against a provided value in the range (0.0f, 1.0f).
	 */
	IsBrightness = "is_brightness",

	/**
	 * Returns true if the subject entity is climbing.
	 */
	IsClimbing = "is_climbing",

	/**
	 * Returns true if the subject entity is the named color.
	 */
	IsColor = "is_color",

	/**
	 * Returns true during the daylight hours.
	 */
	IsDaytime = "is_daytime",

	/**
	 * Tests the current difficulty level of the game.
	 * Values:
	 * easy, hard, normal, peaceful
	 */
	IsDifficulty = "is_difficulty",

	/**
	 * Returns true when the subject entity is a member of the named family.
	 */
	IsFamily = "is_family",

	/**
	 * Tests whether a named game rule is active (domain).
	 */
	IsGameRule = "is_game_rule",

	/**
	 * Tests whether the subject is in an area with humidity.
	 */
	IsHumid = "is_humid",

	/**
	 * Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.
	 */
	IsImmobile = "is_immobile",

	/**
	 * Tests whether the Subject is inside the bounds of a village.
	 */
	IsInVillage = "is_in_village",

	/**
	 * Returns true if the subject entity is leashed.
	 */
	IsLeashed = "is_leashed",

	/**
	 * Returns true if the subject entity leashed to the calling entity.
	 */
	IsLeashedTo = "is_leashed_to",

	/**
	 * Returns true if the subject entity is the mark variant number provided (value).
	 */
	IsMarkVariant = "is_mark_variant",

	/**
	 * Returns true if the subject entity is moving.
	 */
	IsMoving = "is_moving",

	/**
	 * Returns true if the subject entity is the owner of the calling entity.
	 */
	IsOwner = "is_owner",

	/**
	 * Tests if the subject's persistence matches the bool value passed in.
	 */
	IsPersistent = "is_persistent",

	/**
	 * Returns true if the subject entity is riding on another entity.
	 */
	IsRiding = "is_riding",

	/**
	 * Returns true if the subject entity is the skin id number provided.
	 */
	IsSkinId = "is_skin_id",

	/**
	 * Tests whether the subject is sleeping.
	 */
	IsSleeping = "is_sleeping",

	/**
	 * Returns true if the subject entity is sneaking.
	 */
	IsSneaking = "is_sneaking",

	/**
	 * Tests whether the subject is in an area with snow cover.
	 */
	IsSnowCovered = "is_snow_covered",

	/**
	 * Returns true if the subject entity is the target of the calling entity.
	 */
	IsTarget = "is_target",

	/**
	 * Tests whether the current temperature is a given type.
	 * Values: cold, mild, ocean, warm
	 */
	IsTemperatureType = "is_temperature_type",

	/**
	 * Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest.
	 */
	IsTemperatureValue = "is_temperature_value",

	/**
	 * Returns true when the subject entity is underground. An entity is considered underground if there are non-solid blocks above it.
	 */
	IsUnderground = "is_underground",

	/**
	 * Returns true when the subject entity is under water. An entity is considered underwater if it is completely submerged in water blocks.
	 */
	IsUnderwater = "is_underwater",

	/**
	 * Returns true if the subject entity is the variant number provided.
	 */
	IsVariant = "is_variant",

	/**
	 * Returns true if the subject entity is visible.
	 */
	IsVisible = "is_visible",

	/**
	 * Tests is the mob is outside of the specified light level range (0, 16).
	 */
	LightLevel = "light_level",

	/**
	 * Compares the current moon intensity with a float value in the range (0.0, 1.0)
	 */
	MoonIntensity = "moon_intensity",

	/**
	 * Compares the current moon phase with an integer value in the range (0, 7).
	 */
	MoonPhase = "moon_phase",

	/**
	 * Returns true when the subject entity is on ground.
	 */
	OnGround = "on_ground",

	/**
	 * Returns true when the subject entity is on a ladder.
	 */
	OnLadder = "on_ladder",

	/**
	 * Returns true if the random chance rolls 0 out of a specified max range.
	 */
	RandomChance = "random_chance",

	/**
	 * Returns the number of riders on this entity.
	 */
	RiderCount = "rider_count",

	/**
	 * Tests if the subject is a surface mob.
	 */
	SurfaceMob = "surface_mob",

	/**
	 * Returns true if the subject is trusted by entity.
	 */
	Trusts = "trusts",

	/**
	 * Tests the current weather in the dimension against a provided weather value.
	 */
	Weather = "weather",

	/**
	 * Tests the current weather, at the actor's position, against a provided weather value.
	 */
	WeatherAtPosition = "weather_at_position",

}
