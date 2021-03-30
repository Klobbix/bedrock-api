declare interface CommandCallback {
	command: string;
	data: {
		message: string;
		statusCode: number;
	}
}
