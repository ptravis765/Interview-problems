<?php 
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");

	$mysqli = new mysqli('localhost','root', '', 'members');
	if($mysqli->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}else{
		$data = $_POST;
	$sql = "INSERT INTO members.description(last_name,first_name,email_address,position,town) VALUES('{$mysqli->real_escape_string($_POST['lastName'])}','{$mysqli->real_escape_string($_POST['firstName'])}','{$mysqli->real_escape_string($_POST['email'])}','{$mysqli->real_escape_string($_POST['position'])}','{$mysqli->real_escape_string($_POST['town'])}'
    			);"
    	$insert = $mysqli->query($sql);
      if($insert){{
    		echo "SUCCESS";
    	
    	} else {
        	die("Error: {$mysqli->errno} : {$mysqli->error}");
      	}
      	//echo "Connected successfully";
      	echo json_encode($_POST);
      	$mysqli->close();
	}


	
?>
