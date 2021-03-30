/**
 * Defines if an entity is rideable.
 * @see Boat.json
 */
declare interface RideableComponent {
	controlling_seat: number;
	crouching_skip_interact: boolean;
	family_types: string[];
	interact_text: string;
	priority: number;
	pull_in_entities: boolean;
	rider_can_interact: boolean;
	seat_count: number;
	seats: {
		lock_rider_rotation: number;
		max_rider_count: number;
		min_rider_count: number;
		position: VectorArray;
		rotate_rider_by: number;
	}[];
}
