"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategy_1 = require("./strategy");
class GoogleOAuth {
    constructor(config) {
        this.scopes = ["openid", "profile", "email"];
        this.settings = config.settings;
        this.name = "google";
        this.displayName = "Google";
        const { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, } = this.settings;
        this.strategy = strategy_1.builder(this.settings.processOAuthCallback, GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
    }
}
exports.GoogleOAuth = GoogleOAuth;
exports.default = {
    GoogleOAuth,
};
//# sourceMappingURL=index.js.map