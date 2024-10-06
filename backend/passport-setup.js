// passport-setup.js
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const User = require("./models/User");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "/auth/github/callback",
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ githubId: profile.id }).then((existingUser) => {
				if (existingUser) {
					// User already exists
					done(null, existingUser);
				} else {
					// Create a new user in your database
					new User({
						githubId: profile.id,
						username: profile.username,
						thumbnail: profile._json.avatar_url,
					})
						.save()
						.then((newUser) => done(null, newUser));
				}
			});
		}
	)
);
