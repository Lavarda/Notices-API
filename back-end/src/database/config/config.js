module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'database_news_website',
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        flags: '-FOUND_ROWS'
    }
}