import express, { response } from 'express'
import mysql from 'mysql'
import cors from 'cors'
app.use(bodyParser.json());
const app = express();
app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'Murugan@2005',
    database:'pharmacy'
})

app.get('/get_data',(req,response)=>{
    const sql ='SELECT * from medi_items;';
    db.query(sql,(err,result)=>
    {
        if(err){
            return response.json(err)
        }
        return response.json({
            "ok":true,
            "data":result
        })
    })
});





// app.post('/choose', (req, response) => {
//     const sql = 'INSERT INTO billing(bill_no ,item_id, bitem_name, quantity, rate) VALUES (? ,? , ? , ? ,?)';

//     const { id, name, rat, stk } = req.body;

//     console.log(id1);

//     const item_id = id;
//     const bitem_name = name;
//     const quantity = stk;
//     const rate = rat;

//     db.query(sql, [id1 , item_id, bitem_name, quantity, rate], (err, result) => {
//         if (err) {
//             return response.json(err);
//         }
//         return response.json({
//             "ok": true,
//             "data": result
//         });
//     });
// });


app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Error signing up user');
        }
        res.status(201).send('User signed up');
    });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).send('Error logging in user');
        }
        if (results.length === 0) {
            return res.status(400).send('Invalid username or password');
        }
        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid username or password');
        }
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    });
});
app.listen(8082,()=> {
    console.log("db connected");
})