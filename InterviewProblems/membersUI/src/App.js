
import React, {Component} from 'react';
//import jquery from 'jquery';
//import axios from 'axios';
//import {View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform} from 'react-native';
//const $ = window.$;

//import members from "./Components/members.js"
//import memberLayout from "./Components/memberLayout.js"

/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'members'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();*/

/*const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');*/

class App extends Component{
	constructor(){
		super()
		this.state={
			firstName: "",
			lastName: "",
			email: "",
			position: "",
			town: "",
			sort: "Sort By",
			members: [],
			array: [],
			member:{
				last_name: '',
				first_name: '',
				email_address: '',
				position: '',
				town: ''
			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		if(type === "checkbox")
		{
			this.setState({
				[name]: checked
			})
		}else{
			if(type === "text"){
				this.setState({
					//[event.target.name]: event.target.value
					[name]: value
				})
				this.getMembers();
			}else{
				if(value === "ascending")
				{
					this.getAscMembers();
				}else if(value === "descending"){
					this.getDesMembers();
				}
			}
		}
	}

	handleSubmit(event){
		const {member} = this.state;
		/*var data = require('./members.json');
		for(var i = 0; i < data.length; i++){
			var obj = data[i];
			console.log("Name: " + obj.last_name);
		}*/
		if(member.last_name === "" || member.first_name === "" || member.email_address === "")
		{
			alert("Enter a value in the required fields:\n\n Last Name   First Name   Email Address");
		}else{
			/*var data={
				last_name: this.last.value,
				first_name: this.first.value,
				email: this.mail.value,
				position: this.pos.value,
				town: this.town.value
			};*/
			/*axios.post(
				'http://localhost/phpmyadmin/my-app/src/submit.php',{
					form_data:{
						last_name: this.last.value,
						first_name: this.first.value,
						email: this.mail.value,
						position: this.pos.value,
						town: this.town.value
					}
					
				}
			)
			.then(response =>{
				console.log(response)
				console.log(response.form_data)
				this.filter = response.form_data
			})*/
			this.addMember();
			window.location.reload(false);

			alert('the values are: ' + this.last.value + ', ' + this.first.value + ', ' + this.mail.value + ', ' + this.pos.value + ', ' + this.town.value);
		}
    	event.preventDefault();

    	
	}

	componentDidMount(){
		/*jquery.ajax({
       		url: "./members.json",
       		type: "GET",
       		dataType: 'json',
       		ContentType: './members.json',
       		success: function(data) {
         
         		this.setState({data: data});
       		}.bind(this),
       		error: function(jqXHR) {
         		console.log(jqXHR);
       		}*//*.bind(this),
      		error: function(xhr, status, err) {
        		console.error(this.props.url, status, err.toString());
      		}.bind(this)*/
    	//});

    	/*fetch('./members.json',{
    		headers:{
    			'Content-Type': 'application/json',
        		'Accept': 'application/json'
    		}
    	})
    		.then((response) => response.json())
    		.then((findresponse)=>{
    			this.setState({
    				data:findresponse
    			});
    		})*/
    	/*axios.get('./members.json')
    		.then(res =>{
    			console.log(res.data[0].last_name);
    			this.setState(
    				{array: res.data}
    			);
    		//this.setState({members: res.data});
    		})
    		.catch((err)=>{})*/
    		
    	this.getMembers();
  
	}

	handleMembers(){
		return this.state.data.map((mem) => {
			return(
				<tr>
					<td>{mem.last_name}</td>
				</tr>
			);
		})
	}

	//getMembers = _=>
	getMembers(){
    fetch('http://localhost:5000/description')
      .then(response => response.json())
      .then(response => this.setState({members: response.data}))
      .catch(err => console.error(err))
  	}

  	getAscMembers(){
  		fetch('http://localhost:5000/description/asc')
      		.then(response => response.json())
      		.then(response => this.setState({members: response.data}))
      		.catch(err => console.error(err))
  	}

  	getDesMembers(){
  		fetch('http://localhost:5000/description/des')
      		.then(response => response.json())
      		.then(response => this.setState({members: response.data}))
      		.catch(err => console.error(err))
  	}

  	renderMember = ({last_name,first_name,email_address,position,town}) => 
  		<div name = {last_name}>

  			<br/>{last_name} {first_name}
  			<br/>{email_address}
  			<br/>{position}, {town}
  			<br/>
  		</div>
  	
  	addMember() {
    	const {member} = this.state;
    	fetch(`http://localhost:5000/description/add?last_name=${member.last_name}&first_name=${member.first_name}&email_address=${member.email_address}&position=${member.position}&town=${member.town}`)     	
      	.then(response => response.json())
      	.then(this.getProducts)
      	.catch(err => console.error(err))
  	}

	render(){
		const {members, member} = this.state;
		
	
		return(
			<main>
				<form onSubmit={this.handleSubmit}>
					<div className = "addMember">
						<h2>Add Team Member</h2>

						<input 
							id = "lastName"
							type = "text"
							value = {member.last_name}
							name = "lastName"
							placeholder="Last Name" 
							onChange={e => this.setState({member: {...member, last_name: e.target.value}})}
							
							ref = {(last) => this.last = last}
						/>
						<br />
						<br />

						<input 
							id = "firstName"
							type = "text"
							value = {member.first_name}
							name = "firstName"
							placeholder="First Name" 
							onChange={e => this.setState({member: {...member, first_name: e.target.value}})}
							ref = {(first) => this.first = first}
						/>
						<br />
						<br />

						<input 
							id = "email"
							type = "text"
							value = {member.email_address}
							name = "email"
							placeholder="Email Address" 
							onChange={e => this.setState({member: {...member, email_address: e.target.value}})}
							ref = {(mail) => this.mail = mail}
						/>
						<br />
						<br />

						<input 
							id = "position"
							type = "text"
							value = {member.position}
							name = "position"
							placeholder="Position" 
							onChange={e => this.setState({member: {...member, position: e.target.value}})}
							ref = {(pos) => this.pos = pos}
						/>
						<br />
						<br />

						<input 
							id = "town"
							type = "text"
							value = {member.town}
							name = "town"
							placeholder="Town" 
							onChange={e => this.setState({member: {...member, town: e.target.value}})}
							ref = {(town) => this.town = town}
						/>
						<br />
						<br />

						<input id="submit" type="submit" name="submit" value="Submit"/>
					</div>
				</form>

				<form>
					<div className = "output">
						<br/>
						<label>Team member list: </label>

						<select 
							value = {this.state.sort}
							onChange={this.handleChange}
							name = "sort"
						>
							<option value = "">Choose One</option>
  							<option value="ascending">Ascending</option>
  							<option value="descending">Descending</option>
						</select>

						<br />
						<br />
						<div className = "myBox">
							{members.map(this.renderMember)}
						</div>
						<br />
						<br />

						<button>Load</button>
						<button>Save</button>
						<button>Remove</button>

					</div>
				</form>
					

			</main>


		)
	}
}
export default App