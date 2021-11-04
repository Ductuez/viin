const env = process.env.NODE_ENV || 'staging';

const enviroment = {
  development: {
    URL: 'http://localhost:3000',
    API_URL: 'http://localhost:3000/api',
  },
  staging: {
    URL: 'http://localhost:3000',
    API_URL: 'http://localhost:3000/api',
  },
  production: {
    URL: 'https://gambaru.io',
    API_URL: 'http://localhost:3000/api',
  },
}[env];

module.exports = enviroment;
