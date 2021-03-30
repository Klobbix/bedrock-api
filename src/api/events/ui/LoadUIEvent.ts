/**
 * This event is used to show a UI screen to the specific player running the client script.
 * This event will add the UI screen to the top of the UI screen stack.
 * The screen will be shown immediately after the event is triggered.
 * Only screens defined in a HTML file can be shown using this event.
 */
declare interface LoadUIEvent {
	/**
	 * You can define the following options for the screen by setting their value to true or false:
	 */
	options?: {
		/**
		 * If true, input will not be passed down to any other screens underneath
		 */
		absorbs_input?: boolean;
		/**
		 * If true, the screen will always accept and process input for as long as it is in the stack, even if other custom UI screens appear on top of it
		 */
		always_accepts_input?: boolean;
		/**
		 * If true, this screen will be rendered even if another screen is on top of it and will render over them, including the HUD
		 */
		force_render_below?: boolean;
		/**
		 * If true, the screen will be treated as the pause menu and the pause menu won't be allowed to show on top of this screen
		 */
		is_showing_menu?: boolean;
		/**
		 * If true, the game will continue to be rendered underneath this screen
		 */
		render_game_behind?: boolean;
		/**
		 * If true, this screen will only be rendered if it is the screen at the top of the stack
		 */
		render_only_when_topmost?: boolean;
		/**
		 * If true, the screen will capture the mouse pointer and limit its movement to the UI screen
		 */
		should_steal_mouse?: boolean;
	};
	/**
	 * The file path to the screen's HTML file
	 */
	path: string;
}
