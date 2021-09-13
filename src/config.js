const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'Password',
    database: env.DB_NAME || 'agritech',
  },
  listPerPage: env.LIST_PER_PAGE || 3,
};


module.exports = config;
