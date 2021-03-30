import { ClientScript } from "../ClientScript";
import { EventType } from "../../types/EventType";
import { ServerScript } from "../ServerScript";

export class UiHelper {

	constructor(private script: ClientScript | ServerScript) {
	}

	/**
	 *  Shows a UI screen to the specific player running the client script. This will add the UI screen to the top of the UI screen stack.
	 *  The screen will be shown immediately after the event is triggered. Only screens defined in a HTML file can be shown using this.
	 * @param path The file path to the screen's HTML file
	 * @param alwaysAcceptInput If true, the screen will always accept and process input for as long as it is in the stack, even if other custom UI screens appear on top of it
	 * @param renderGameBehind If true, the game will continue to be rendered underneath this screen
	 * @param absorbInput If true, input will not be passed down to any other screens underneath
	 * @param showingMenu If true, the screen will be treated as the pause menu and the pause menu won't be allowed to show on top of this screen
	 * @param stealMouse If true, the screen will capture the mouse pointer and limit its movement to the UI screen
	 * @param renderBelow If true, this screen will be rendered even if another screen is on top of it and will render over them, including the HUD
	 * @param renderOnlyWhenTopmost If true, this screen will only be rendered if it is the screen at the top of the stack
	 */
	loadUi(path: string, alwaysAcceptInput: boolean, renderGameBehind: boolean, absorbInput: boolean, showingMenu: boolean, stealMouse: boolean, renderBelow: boolean, renderOnlyWhenTopmost: boolean): void {
		this.script.broadcastEvent(EventType.LoadUi, {
			path: path, options:
				{
					always_accepts_input: alwaysAcceptInput,
					render_game_behind: renderGameBehind,
					absorbs_input: absorbInput,
					is_showing_menu: showingMenu,
					should_steal_mouse: stealMouse,
					force_render_below: renderBelow,
					render_only_when_topmost: renderOnlyWhenTopmost
				}
		});
	}

	/**
	 * This event is used to send UI events to the UI Engine for the specific player running the script.
	 * After the event is triggered, the UI event will be sent immediately.
	 * Custom UI is based on HTML 5.
	 * @param identifier The identifier of the UI event
	 * @param data The data for the UI event being triggered
	 */
	sendUi(identifier: string, data: string): void {
		this.script.broadcastEvent(EventType.SendUiEvent, {eventIdentifier: identifier, data: data});
	}

}
