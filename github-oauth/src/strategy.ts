import { Strategy } from "passport-github2";

export const builder = (
	processOAuthCallback: any,
	callbackURL: any,
	clientID: any,
	clientSecret: any
): any => {
	const strategy = (models: any): Strategy =>
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
		new Strategy(
			{
				callbackURL,
				clientID,
				clientSecret,
				passReqToCallback: false,
				scope: ["user:email"], // fetches non-public emails as well
			},
			(_, __, ___, profile: any, done: any) => {
				void processOAuthCallback(models, profile, done);
			}
		);
	return strategy;
};
