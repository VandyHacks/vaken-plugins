"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_github2_1 = require("passport-github2");
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
    new passport_github2_1.Strategy({
        callbackURL,
        clientID,
        clientSecret,
        passReqToCallback: false,
        scope: ["user:email"],
    }, (_, __, ___, profile, done) => {
        void processOAuthCallback(models, profile, done);
    });
    return strategy;
};
//# sourceMappingURL=strategy.js.map