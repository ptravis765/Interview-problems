<DOCTYPE html>
<html>
<?php
	if(isset($_POST['submit']))
	{
		if(!empty($_POST)){
			$mysqli = new mysqli('localhost','root', '', 'members');
		}
		if($mysqli->connect_error){
      		die('Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error);
    	}

    	$sql = "INSERT INTO members.description(last_name,first_name,email_address,position,town) VALUES('{$mysqli->real_escape_string($_POST['lastName'])}','{$mysqli->real_escape_string($_POST['firstName'])}','{$mysqli->real_escape_string($_POST['email'])}','{$mysqli->real_escape_string($_POST['position'])}','{$mysqli->real_escape_string($_POST['town'])}'
    			);"
    	if($sql){
    		echo "SUCCESS";
    	
    	} else {
        	die("Error: {$mysqli->errno} : {$mysqli->error}");
      	}

      	$mysqli->close();
	}
?>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		
		<div id="root"></div>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
 
		<script src="index.pack.js"></script>
	</body>
</html>