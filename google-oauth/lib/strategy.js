"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
exports.builder = (processOAuthCallback, callbackURL, clientID, clientSecret) => {
    const strategy = (models) => 
    // FIXME: need to do error checking of url, id, secret
    // if (!GOOGLE_CLIENT_ID) {
    // 	throw new Error('GOOGLE_CLIENT_ID not set');
    // }
    // if (!GOOGLE_CLIENT_SECRET) {
    // 	throw new Error('GOOGLE_CLIENT_SECRET not set');
    // }
    // if (!GOOGLE_CLIENT_SECRET) {
    // 	throw new Error('GOOGLE_CLIENT_SECRET not set');
    // }
    new passport_google_oauth20_1.Strategy({
        callbackURL,
        clientID,
        clientSecret,
        passReqToCallback: false,
        scope: ["openid", "profile", "email"],
    }, (accessToken, refreshToken, profile, done) => {
        void processOAuthCallback(models, profile, done);
    });
    return strategy;
};
//# sourceMappingURL=strategy.js.map