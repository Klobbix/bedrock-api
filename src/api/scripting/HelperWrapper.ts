import { MessagingHelper } from "./helpers/MessagingHelper";
import { EntityHelper } from "./helpers/EntityHelper";
import { ServerScript } from "./ServerScript";
import { ClientScript } from "./ClientScript";
import { InventoryHelper } from "./helpers/InventoryHelper";
import { ParticleHelper } from "./helpers/ParticleHelper";
import { SoundHelper } from "./helpers/SoundHelper";
import { UiHelper } from "./helpers/UiHelper";
import { LevelHelper } from "./helpers/LevelHelper";

export class HelperWrapper {

	constructor(private script: ServerScript | ClientScript) {
	}

	inventory = new InventoryHelper(this.script);
	messaging = new MessagingHelper(this.script);
	entities = new EntityHelper(this.script);
	particles = new ParticleHelper(this.script);
	sounds = new SoundHelper(this.script);
	ui = new UiHelper(this.script);
	level = new LevelHelper(this.script);
}
