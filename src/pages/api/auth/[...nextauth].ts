import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: "https://discord.com/api/oauth2/authorize?client_id=922130278443528232&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20guilds"
    }),
  ],
  callbacks: {
    async jwt(d) {
      //console.log(JSON.stringify(d))
      // Persist the OAuth access_token to the token right after signin
      if (d.account) {
        d.token.accessToken = d.account.access_token
      }
      return d.token
    },
    async session(d) {
      //console.log(d)
      // Send properties to the client, like an access_token from a provider.
      d.session.accessToken = d.token.accessToken
      return d.session
    }
  }
}

export default NextAuth(authOptions);