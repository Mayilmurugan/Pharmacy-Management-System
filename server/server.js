import express, { response } from 'express'
import mysql from 'mysql'
import cors from 'cors'

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
    const sql ='SELECT * from medi_items where stock != 0;';
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
app.get('/edit/:id', (req, response) => {
    const sql = "SELECT * FROM medi_items WHERE item_id=?";
  //  console.log(req);
    const item_id = req.params.id;
   // console.log(req.params.id)
    db.query(sql, [item_id], (err, result) => {
        if (err) {
            return response.json(err);
        }
        return response.json({
            "ok": true,
            "data": result
        });
    });
});

app.post('/data', (req, response) => {
    const sql = 'INSERT INTO medi_items VALUES(?,?,?,?,?,?);';
    console.log(req.body);
    const item_id = req.body.item_id;
    console.log(req.body.item_id);
    const item_name = req.body.item_name;
    const dosage = req.body.dosage;
    const rate = req.body.rate;
    const dateObject = new Date(req.body.ex_date);
    const ex_date = dateObject.toISOString().split('T')[0];
    const stock = req.body.stock;
     
   
    db.query(sql, [item_id, item_name, dosage, rate, ex_date, stock], (err, result) => {
        console.log(result, "hiii");
        if (err) {
            console.error("Error inserting into database:", err);
            return response.status(500).json({ error: "Error inserting into database" , msg: err });
        }
        console.log("Inserted successfully.");
        return response.status(200).json({ message: "Inserted successfully" });
    });
});


app.put('/edited/:id',(req,res) => {
    const sql = "UPDATE medi_items SET `item_name` = ?, `dosage` = ?, `rate` = ?, `ex_date` = ?, `stock` = ? where item_id = ?  ";
    const id = req.params.id;
    console.log(req.body)
    const dateObject = new Date(req.body.ex_date);
    const ex_date = dateObject.toISOString().split('T')[0];
    db.query(sql,[req.body.item_name, req.body.dosage, req.body.rate, ex_date, req.body.stock, id],(err, result)=> {
        if(err){
            console.log(err , "hii");
            return res.json("error")
        } 
        return res.json({updated:true})
    })
});


app.post('/remove/:id',(req,response)=>{
    const item_id = req.params.id;
    const sql ='DELETE FROM medi_items where item_id = ?';
    
    db.query(sql,[item_id],(result,err)=>
    {
        if(err)
            return response.json(err)
        return response.json(result)
    })
    
    
});


app.post('/post_data/:billId',(req,response)=>{
    const sql = 'INSERT INTO billing(bill_no ,item_id, bitem_name, quantity) VALUES (?);';
    console.log(req.body);
    const { item_id, name, quantity ,billId} = req.body;
         const i = item_id;
         const bitem_name = name;
         const quantit = quantity[i];
         console.log(quantit);
         const b=req.params.billId;
         console.log(b);
         const values=[b , i, bitem_name, quantit]
         db.query(sql,[values] , (err, result) => {
    db.query(sql,[values],(result,err)=>
    {
        if(err)
            return response.json(err)
        return response.json(result)
    })
})
});

app.post('/pres_data/:billId', (req,response)=>{
    const sql = 'INSERT INTO  prescriptions(customer_id, customer_name, bill_no)  values(?);';
    console.log(req.body);
    const b = req.params.billId;
    const Name = req.body.customer_name;
    const c = req.body.uniqueId2;
    const values = [c, Name, b]
    console.log(values);
    db.query(sql,[c, Name, b] , (err, result) => {
        db.query(sql,[values],(result,err)=>
        {
            if(err)
                return response.json(err)
            return response.json(result)
        })
    })
});

app.get('/vendor_data',(req,response)=>{
    const sql ='SELECT * from supplier;';
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


app.post('/order_data/:id',(req,response)=>{
    const s_id = req.params.id;
    const sql ='insert into orders values(?)';
    console.log(req.body)
    const Name = req.body.item_name;
    const d = req.body.dosage;
    const q = req.body.quantity;
    const values = [s_id, Name, d, q];

    db.query(sql,[values],(result,err)=>
    {
        if(err)
            return response.json(err)
        return response.json(result)
    })
    
    
});

// app.get('/total_data/:id', (req, res) => {
//     const billId = req.params.id;
//     console.log(req);
//     //console.log(billId);
//     db.query('CALL bill1(?)', [billId], (err, results) => {
//       if (err) {
//         console.error('Error executing stored procedure:', err);
//         res.status(500).send('Error processing bill');
//       } 
//       else {
//         return res.json({
//             "ok":true,
//             "data":results[0]
//         })
//       }
      
//     });
//   });

  app.get('/total_data/:id', (req, res) => {
    const billId = req.params.id;
    console.log(`Bill ID: ${billId}`);
  
    // Call stored procedure to get billing details
    db.query('CALL bill(?)', [billId], (err, billingResults) => {
      if (err) {
        console.error('Error executing stored procedure:', err);
        res.status(500).send('Error processing bill');
        return;
      }
  
      // Call stored function to get total rate
      db.query('SELECT total_rate(?) AS total', [billId], (err, totalResult) => {
        if (err) {
          console.error('Error executing function:', err);
          res.status(500).send('Error processing total rate');
          return;
        }

        db.query('SELECT total_qnt(?) AS total1', [billId], (err, totalqnt) => {
            if (err) {
              console.error('Error executing function:', err);
              res.status(500).send('Error processing total rate');
              return;
            }
        // Combine results and send as JSON
        res.json({
          data: billingResults[0],
          data1: totalResult[0].total,
          data2: totalqnt[0].total1,
        });
      });
    });
    });
  });

  app.get('/presc_data',(req,response)=>{
    const sql ='SELECT * from prescriptions;';
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

app.get('/detail_data/:id',(req,response)=>{
    const sql ='SELECT * from billing where bill_no = ?;';
    const billId = req.params.id;
    console.log( billId);
    db.query(sql,[billId],(err,result)=>
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

app.post('/sup_data', (req, response) => {
    const sql = 'INSERT INTO supplier VALUES(?,?,?,?,?);';
    console.log(req.body);
    const i = req.body.supplier_id;
    console.log(req.body.item_id);
    const n = req.body.supplier_name;
    const p = req.body.p_no;
    const a = req.body.address;
    const c = req.body.company;
     
   
    db.query(sql, [i, n, p, a, c ], (err, result) => {
        console.log(result, "hiii");
        if (err) {
            console.error("Error inserting into database:", err);
            return response.status(500).json({ error: "Error inserting into database" , msg: err });
        }
        console.log("Inserted successfully.");
        return response.status(200).json({ message: "Inserted successfully" });
    });
});

app.get('/final_data/:id',(req,response)=>{
    const sql ='SELECT * from orders where supplier_id = ?;';
    const billId = req.params.id;
    console.log( billId);
    db.query(sql,[billId],(err,result)=>
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

app.get('/count', (req, res) => {
    let sqlTotal = 'SELECT COUNT(item_name) AS totalCount FROM medi_items';
    let sqlLowStock = 'SELECT COUNT(item_name) AS lowStockCount FROM medi_items WHERE stock < 5';
    let sqlsupplier = 'select count(supplier_id) as suppliercount from supplier;';

    db.query(sqlTotal, (err, resultTotal) => {
        if (err) throw err;

        db.query(sqlLowStock, (err, resultLowStock) => {
            if (err) throw err;
            db.query(sqlsupplier, (err, resulttotal) => {
                if (err) throw err;
    
            res.json({
                totalCount: resultTotal[0].totalCount,
                lowStockCount: resultLowStock[0].lowStockCount,
                totalsuppliers: resulttotal[0].suppliercount
            });
        });
    });

    });
});

//-------------------------------------------
// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     console.log(req.body)
//     //const hashedPassword = await bcrypt.hash(password, 10);
//     db.query('INSERT INTO users1 (username, password) VALUES (?, ?)', [username, password], (err, result) => {
//         if (err) {
//             console.error('Error inserting user:', err);
//             return res.status(500).send('Error signing up user');
//         }
//         res.status(201).send('User signed up');
//     });
// });

// // Login route
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//         if (err) {
//             console.error('Error fetching user:', err);
//             return res.status(500).send('Error logging in user');
//         }
//         if (results.length === 0) {
//             return res.status(400).send('Invalid username or password');
//         }
//         const user = results[0];
//         //const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (password) {
//             return res.status(400).send('Invalid username or password');
//         }
//         const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//         res.json({ token });
//     });
// });
app.listen(8081,()=> {
    console.log("hello");
})