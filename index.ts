import { builder } from "./strategy";
import logo from "./google_logo.svg";

export class GoogleOAuth {
	scopes: string[];
	settings: any;
	name: string; // api names
	displayName: string; // frontend name
	logo: string;
	strategy: any;

	constructor({ settings }) {
		this.scopes = ["oauth"];
		this.settings = settings;
		this.name = "google";
		this.displayName = "Google";
		this.logo = logo; // svg html as a string
		const {
			GOOGLE_CALLBACK_URL,
			GOOGLE_CLIENT_ID,
			GOOGLE_CLIENT_SECRET
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
	GoogleOAuth
};
