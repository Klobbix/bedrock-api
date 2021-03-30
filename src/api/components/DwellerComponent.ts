/**
 * Declares an entity to be a dweller.
 */
declare interface DwellerComponent {
	dwelling_type: string;
	dweller_role: string;
	update_interval_base: number;
	update_interval_variant: number;
	can_find_poi: boolean;
	can_migrate: boolean;
	first_founding_reward: number;
}
