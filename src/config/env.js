/**
 * @description Environment configuration
 */
const envConfig = {
    loginBase: process.env.BLAMELESS_OAUTH_BASE,
    clientId: process.env.BLAMELESS_OAUTH_CLIENT_ID,
    clientSecret: process.env.BLAMELESS_OAUTH_CLIENT_SECRET,
    audience: process.env.BLAMELESS_OAUTH_AUDIENCE,
    grandType: process.env.BLAMELESS_OAUTH_GRAND_TYPE,
}

export default envConfig
