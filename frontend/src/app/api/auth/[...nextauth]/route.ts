import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: "Ov23linhbs5YwUeTC9b0",
			clientSecret: "b12b0239776cae98f50e7a1326c492b57a417859",
		}),
	],
});
export { handler as GET, handler as POST };