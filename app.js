const pool = require('./database.js');
const express = require('express');
const app = express();

// pool.connect();

const stringFilter = '\'John Brady\'';

// pool.query('SELECT * from brad where name= '.concat(stringFilter),  (err, result) => {
//     if(!err) {
//         console.log(result.rows);
//     }
//     pool.end();
// })

// (async () => {
//     await pool.connect();
//     const result = await pool.query('SELECT * from brad where name= '.concat(stringFilter));
//     console.log(result.rows);
//     pool.end();
// })();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        await pool.connect();
        const value = await pool.query('SELECT * from brad where name= '.concat(stringFilter));
        console.log(value.rows);
        return res.json(value.rows)
    } catch (error) {
        return res.json({code: 1, message: error.message, data: null})
    }
})

app.post('/post', async (req, res) => {
    try {

        const {id, name, email, phonenumber, address} = req.body

        try {
            const value = await pool.query('INSERT INTO brad(id, name, email, phonenumber, address)values($1, $2, $3, $4, $5)', [id, name, email, phonenumber, address])
            console.log(value.rows);
            const dataResponse = {
                'id': id,
                'name': name,
                'email' : email,
                'phonenumber' : phonenumber,
                'address' : address
            }
    
            return res.json({code: 0, message: 'success', data: dataResponse}) 
            
        } catch (error) {
            return res.json({code: 0, message: error.message, data: null})
        }

    } catch (error) {
        return res.json({code: 1, message: error.message, data: null})
    }
})

app.delete('/delete/:id', async(req, res) => {
    const {id} = req.params
    console.log(id)
    try {
        const result = await pool.query('DELETE FROM brad WHERE id = $1', [id]);
        const dataResponse = {'id': id}
        return res.json({code: 0, message: 'success', data: dataResponse}) 
    } catch (error) {
        return res.json({code: 1, message: error.message, data: null})
    }
})

// app.post("/add", async(req, res) => {
//     try {
//         console.log(req.body);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.delete("/delete", async(req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

app.listen(4000, () => {
    console.log("Server is listening on port 4000")
});