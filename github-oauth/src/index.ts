import { builder } from "./strategy";

export class GitHubOAuth {
	scopes: string[];

	settings: any;

	name: string; // api names

	displayName: string; // frontend name

	strategy: any;

	constructor(config: any) {
		this.scopes = ["user:email"]; // fetches non-public emails as well
		this.settings = config.settings;
		this.name = "github";
		this.displayName = "GitHub";
		const {
			GITHUB_CALLBACK_URL,
			GITHUB_CLIENT_ID,
			GITHUB_CLIENT_SECRET,
		} = this.settings;
		this.strategy = builder(
			this.settings.processOAuthCallback,
			GITHUB_CALLBACK_URL,
			GITHUB_CLIENT_ID,
			GITHUB_CLIENT_SECRET
		);
	}
}

export default {
	GitHubOAuth,
};
