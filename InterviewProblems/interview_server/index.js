const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

/*const SELECT_ALL_PRODUCT_QUERY = 'SELECT * FROM description';

//const INSERT_INTO = 'INSERT INTO `products`(`product_id`, `name`, `price`) VALUES (4,"'TV'",500)';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'members'
});

connection.connect(err =>{
	if(err){
		return err;
	}
});

console.log(connection);

app.use(cors());
app.get('/',(req,res) =>{
	res.send('go to /products to see products')
});
app.get('/products/add',(req,res) =>{
	const {last_name, first_name, email_address, position, town} = req.query;
	//console.log(name,price);
	const INSERT_PRODUCTS_QUERY = `INSERT INTO description (last_name, first_name, email_address, position, town) VALUES('${last_name}','${first_name}','${email_address}','${position}','${town}')`;
	//const INSERT_PRODUCTS_QUERY = "INSERT INTO products (name, price) VALUES('dvd',50)";
	//res.send('adding product');
	connection.query(INSERT_PRODUCTS_QUERY, (err, results) =>{
		if(err){
			return res.send(err)
		} else {
			return res.send(`successfully added ${last_name}, ${first_name}, ${email_address}, ${position}, and ${town} into database`  );
		}
	});
})
app.get('/product', (req,res) =>{
	
	connection.query(SELECT_ALL_PRODUCT_QUERY,(err, results)=>{
		if(err){
			return res.send(err)
		}else{
			return res.json({
				data: results
			})
		}
	});
});

app.listen(5000,()=>{
	console.log("Description server listening on port 5000")
})
*/


const SELECT_ALL_DESCRIPTION_QUERY = 'SELECT * FROM description';

//const INSERT_INTO = 'INSERT INTO `products`(`product_id`, `name`, `price`) VALUES (4,"'TV'",500)';
const ORDER_BY_DESCENDING = 'SELECT * FROM description ORDER BY last_name DESC';
const ORDER_BY_ASCENDING = 'SELECT * FROM description ORDER BY last_name';
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'members'
});

connection.connect(err =>{
	if(err){
		return err;
	}
});

console.log(connection);

app.use(cors());
app.get('/',(req,res) =>{
	res.send('go to /description to see description')
});

app.get('/description/add',(req,res) =>{
	const {last_name, first_name, email_address, position, town} = req.query;
	const INSERT_DESCRIPTION_QUERY = `INSERT INTO description (last_name, first_name, email_address, position, town) VALUES('${last_name}','${first_name}','${email_address}','${position}','${town}')`;
	//URL to use is http://localhost:5000/description/add?last_name=test&first_name=test&email_address=test&position=test&town=test
	connection.query(INSERT_DESCRIPTION_QUERY, (err, results) =>{
		if(err){
			return res.send(err)
		} else {
			return res.send(`successfully added ${last_name}, ${first_name}, ${email_address}, ${position}, and ${town} into database`  );
		}
	});
})
app.get('/description', (req,res) =>{
	//URL to use is http://localhost:5000/description
	connection.query(SELECT_ALL_DESCRIPTION_QUERY,(err, results)=>{
		if(err){
			return res.send(err)
		}else{
			return res.json({
				data: results
			})
		}
	});
});

app.get('/description/asc', (req,res) =>{
	//URL to use is http://localhost:5000/description/asc
	connection.query(ORDER_BY_ASCENDING,(err, results)=>{
		if(err){
			return res.send(err)
		}else{
			return res.json({
				data: results
			})
		}
	});
});

app.get('/description/des', (req,res) =>{
	//URL to use is http://localhost:5000/description
	connection.query(ORDER_BY_DESCENDING,(err, results)=>{
		if(err){
			return res.send(err)
		}else{
			return res.json({
				data: results
			})
		}
	});
});

app.listen(5000,()=>{
	console.log("Description server listening on port 5000")
})