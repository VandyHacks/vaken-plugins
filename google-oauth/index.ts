import { builder } from "./strategy";
// import logo from "./google_logo.svg";

export class GoogleOAuth {
	scopes: string[];

	settings: any;

	name: string; // api names

	displayName: string; // frontend name

	strategy: any;

	constructor(config: any) {
		this.scopes = ["oauth"];
		this.settings = config.settings;
		this.name = "google";
		this.displayName = "Google";
		const {
			GOOGLE_CALLBACK_URL,
			GOOGLE_CLIENT_ID,
			GOOGLE_CLIENT_SECRET,
		} = this.settings;
		this.strategy = builder(
			this.settings.processOAuthCallback,
			GOOGLE_CALLBACK_URL,
			GOOGLE_CLIENT_ID,
			GOOGLE_CLIENT_SECRET
		);
	}
}

export default {
	GoogleOAuth,
};
