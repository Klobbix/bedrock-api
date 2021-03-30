/**
 * Nameable component describes an entity's ability to be named using a nametag and whether the name shows up or not once applied.
 * Additionally, scripting allows setting the name of the entity directly with the property 'name'.
 */
declare interface NameableComponent {
	/**
	 * If true, this entity can be renamed with name tags
	 * @default true
	 */
	allow_name_tag_renaming: boolean;
	/**
	 * If true, the name will always be shown
	 * @default false
	 */
	always_show: boolean;
	/**
	 * Trigger to run when the entity gets named
	 */
	default_trigger: Trigger | string;
	/**
	 * The current name of the entity, empty if the entity hasn't been named yet, making this non-empty will apply the name to the entity
	 */
	name: string;
	/**
	 * Describes the special names for this entity and the events to call when the entity acquires those names
	 */
	name_actions: {
		/**
		 * List of special names that will cause the events defined in 'on_named' to fire
		 */
		name_filter: string[];
		/**
		 * Event to be called when this entity acquires the name specified in 'name_filter'
		 */
		on_named: Trigger | string;
	}[];
}
