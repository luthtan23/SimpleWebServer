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

app.get('/', async (req, res) => {
    return res.json({
        code: 0,
        message: 'success',
        description: 'App running 🚀🚀🚀'
    })
})

app.post('/post', async (req, res) => {
    try {
        console.log(req.body)

        const {username, password} = req.body

        const dataResponse = {
            'username': username,
            'password': password
        }

        return res.json({code: 0, message: 'success', data: dataResponse})

    } catch (error) {
        return res.json({code: 1, message: error.message, data: null})
    }
})

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