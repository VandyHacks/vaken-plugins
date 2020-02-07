import { Strategy } from 'passport-google-oauth20';

// FIXME: need to do checking of url, id, secret
export const builder = (verifyCallback, callbackURL, clientID, clientSecret): any => {
	const strategy = (models: any): Strategy =>
		new Strategy(
			{
				callbackURL,
				clientID,
				clientSecret,
				passReqToCallback: false,
				scope: ['openid', 'profile', 'email']
			},
			(accessToken, refreshToken, profile, done) => void verifyCallback(models, profile, done)
		);
	return strategy;
}
