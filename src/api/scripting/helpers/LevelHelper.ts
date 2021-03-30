import { ComponentType } from "../../types/ComponentType";
import { ServerScript } from "../ServerScript";
import { ClientScript } from "../ClientScript";

export class LevelHelper {

	constructor(private script: ServerScript | ClientScript) {
	}

	/**
	 * Returns the current ticking areas on the level.
	 */
	getTickingAreas(): TickingArea[] {
		let areas: Component<TickAreaComponent> = this.script.system().getComponent(server.level, ComponentType.TickingAreas);
		return areas.data.areas;
	}

	/**
	 * Enables/disables the weather.
	 * @param cycle True to cycle weather or false to always keep it the same
	 */
	cycleWeather(cycle: boolean): void {
		let weatherComponent: Component<WeatherComponent> = this.script.system().getComponent(server.level, ComponentType.Weather);
		weatherComponent.data.do_weather_cycle = cycle;
		this.script.system().applyComponentChanges(server.level, weatherComponent);
	}

	/**
	 * Sets the amount of rain on the level.
	 * @param level A value between 0 and 1 that determines how heavy the rainfall is
	 */
	setRainLevel(level: number): void {
		let weatherComponent: Component<WeatherComponent> = this.script.system().getComponent(server.level, ComponentType.Weather);
		weatherComponent.data.rain_level = level;
		this.script.system().applyComponentChanges(server.level, weatherComponent);
	}

	/**
	 * Sets the amount of time to show rain on the level.
	 * @param ticks How long, in ticks, it will rain for
	 */
	setRainTime(ticks: number): void {
		let weatherComponent: Component<WeatherComponent> = this.script.system().getComponent(server.level, ComponentType.Weather);
		weatherComponent.data.rain_time = ticks;
		this.script.system().applyComponentChanges(server.level, weatherComponent);
	}

	/**
	 * Sets the amount of lightning on the level.
	 * @param level A value between 0 and 1 that determines how much lightning and thunder there is
	 */
	setLightningLevel(level: number): void {
		let weatherComponent: Component<WeatherComponent> = this.script.system().getComponent(server.level, ComponentType.Weather);
		weatherComponent.data.lightning_level = level;
		this.script.system().applyComponentChanges(server.level, weatherComponent);
	}

	/**
	 * Sets the amount of time to show lightning on the level.
	 * @param ticks How long, in ticks, it will lightning and thunder for
	 */
	setLightningTime(ticks: number): void {
		let weatherComponent: Component<WeatherComponent> = this.script.system().getComponent(server.level, ComponentType.Weather);
		weatherComponent.data.lightning_time = ticks;
		this.script.system().applyComponentChanges(server.level, weatherComponent);
	}
}
