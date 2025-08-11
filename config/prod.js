const { stripePublicKey, stripeSecretKey } = require('./dev');

module.exports = {
	googleClientId: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongodbUri: process.env.MONGODB_URI,
	cookieKey: process.env.COOKIE_KEY,
	stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
