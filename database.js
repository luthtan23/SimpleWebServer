const {Pool,Client} = require('pg');


const client = new Client({
    host: "localhost",
    port: 5000,
    user: "postgres",
    password: "B4nomor12.",
    database: "test"
})

client.on("connect", () => {
    console.log("Database Connection")
})

client.on("end", () => {
    console.log("Connection end")
})

module.exports = client