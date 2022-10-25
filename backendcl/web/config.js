module.exports ={

    database: {
        username: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DATABASE || "PTCarvajal",
        host: process.env.MYSQL_HOST || "localhost"
    }
}