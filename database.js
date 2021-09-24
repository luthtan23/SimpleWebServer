const Pool = require('pg').Pool;


const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "B4nomor12.",
    database: "test"
})

pool.on("connect", () => {
    console.log("Database Connection")
})

pool.on("end", () => {
    console.log("Connection end")
})

module.exports = pool