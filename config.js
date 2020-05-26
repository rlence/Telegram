const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://de_user_test:useradmin1992madridvalence@cluster0-ezd9q.mongodb.net/test',
    port: process.env.PORT || 8080,
    host: process.env.HOST ||'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app'
};

module.exports = config;