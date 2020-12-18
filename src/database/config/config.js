module.exports = {
    dialect: 'mysql',
    host: process.env.API_HOST,
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    database: process.env.API_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        flags: '-FOUND_ROWS'
    }
}