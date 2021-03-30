/**
 * Defines an entity's transformation from the current definition into another.
 */
declare interface TransformationComponent {

	add: { component_groups: string[] };

	begin_transform_sound: string;

	delay: {
		block_assist_chance: number;
		block_chance: number;
		block_max: number;
		block_radius: number;
		block_types: string[];
		value: number;
	};

	drop_equipment: boolean;

	into: string;

	keep_level: boolean;

	keep_owner: boolean;

	transformation_sound: string;
}

