/**
 * Allows the entity to be a thrown entity.
 */
declare interface ProjectileComponent {
	angle_offset: number;
	catch_fire: boolean;
	crit_particle_on_hurt: boolean;
	destroy_on_hurt: boolean;
	filter: Filter;
	fire_affected_by_griefing: boolean;
	gravity: number;
	hit_sound: string;
	homing: boolean;
	inertia: number;
	is_dangerous: boolean;
	knockback: boolean;
	lightning: boolean;
	liquid_inertia: number;
	multiple_targets: boolean;
	offset: VectorArray;
	on_fire_time: number;
	particle: string;
	potion_effect: number;
	power: number;
	reflect_on_hurt: boolean;
	semi_random_diff_damage: boolean;
	shoot_sound: string;
	shoot_target: boolean;
	should_bounce: boolean;
	splash_potion: boolean;
	splash_range: boolean;
	uncertainty_base: number;
	uncertainty_multiplier: number;
}
