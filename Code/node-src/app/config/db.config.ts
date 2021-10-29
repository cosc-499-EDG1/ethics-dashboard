//TODO: move this to a .env file for security
export default {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'cosc499',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
