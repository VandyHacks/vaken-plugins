"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategy_1 = require("./strategy");
class GitHubOAuth {
    constructor(config) {
        this.scopes = ["user:email"]; // fetches non-public emails as well
        this.settings = config.settings;
        this.name = "github";
        this.displayName = "GitHub";
        const { GITHUB_CALLBACK_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, } = this.settings;
        this.strategy = strategy_1.builder(this.settings.processOAuthCallback, GITHUB_CALLBACK_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET);
    }
}
exports.GitHubOAuth = GitHubOAuth;
exports.default = {
    GitHubOAuth,
};
//# sourceMappingURL=index.js.map