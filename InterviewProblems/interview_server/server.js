const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();



//This query will retrieve all of the data in the description table of the database
const SELECT_ALL_DESCRIPTION_QUERY = 'SELECT * FROM description';

//This query will retrieve all of the data in the description table of the database in descending order
const ORDER_BY_DESCENDING = 'SELECT * FROM description ORDER BY last_name,first_name DESC';

//This query will retrieve all of the data in the description table of the database in ascending order
const ORDER_BY_ASCENDING = 'SELECT * FROM description ORDER BY last_name,first_name';

//This creates a connection to the database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'members'
});

//if there is any problems connecting to the database this will output the problem
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

//This is the code that creates the url to retrieve the data after the INSERT_DESCRIPTION_QUERY command is used
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

//This is the code that creates the url to retrieve the data after the DELETE_DESCRIPTION_QUERY command is used
app.get('/description/del',(req,res) =>{
	const {last_name, first_name, email_address, position, town} = req.query;
	const DELETE_DESCRIPTION_QUERY = `DELETE FROM description WHERE email_address = '${email_address}'`;
	//URL to use is http://localhost:5000/description/del?email_address=test
	connection.query(DELETE_DESCRIPTION_QUERY, (err, results) =>{
		if(err){
			return res.send(err)
		} else {
			return res.send(`successfully deleted ${last_name}, ${first_name}, ${email_address}, ${position}, and ${town} from database`  );
		}
	});
})

//This is the code that creates the url to retrieve the data after the SELECT_ALL_DESCRIPTION_QUERY command is used
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

//This is the code that creates the url to retrieve the data after the ORDER_BY_ASCENDING command is used
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

//This is the code that creates the url to retrieve the data after the ORDER_BY_DESCENDING command is used
app.get('/description/des', (req,res) =>{
	//URL to use is http://localhost:5000/description/des
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