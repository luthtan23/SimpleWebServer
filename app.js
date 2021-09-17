const client = require('./database.js');
const express = require('express');
const app = express();

// client.connect();

const stringFilter = '\'John Brady\'';

// client.query('SELECT * from brad where name= '.concat(stringFilter),  (err, result) => {
//     if(!err) {
//         console.log(result.rows);
//     }
//     client.end();
// })

// (async () => {
//     await client.connect();
//     const result = await client.query('SELECT * from brad where name= '.concat(stringFilter));
//     console.log(result.rows);
//     client.end();
// })();

app.use(express.json());

app.post("/add", async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
});