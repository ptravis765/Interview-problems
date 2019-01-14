
import React, {Component} from 'react';
//import jquery from 'jquery';
//import axios from 'axios';
//import {View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform} from 'react-native';
//const $ = window.$;



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
		this.handleRemove = this.handleRemove.bind(this)
		this.getAscMembers = this.getAscMembers.bind(this)
		this.getDesMembers = this.getDesMembers.bind(this)
		this.getMembers = this.getMembers.bind(this)
	}

	/*handleChange() is called whenever one of the input elements like
	'selection' or 'text' change their values. This function will change give
	the 'name', 'value', and 'type' their own values*/
	handleChange(event){
		const {name, value, type} = event.target
		const {member} = this.state;
		if(type === "checkbox")
		{
			console.log("THE VALUE IS " + value);
			this.setState({
				[name]: value
			})
		}else
			if(type === "text"){
				console.log("text");
				this.setState({
					[name]: value
				})
				this.getMembers();
			}else{
				console.log("selection");
				this.setState({
					[name]: value
				})
				if(value === "asc"){
					console.log("ascending");
					this.getAscMembers();
				}else if(value === "des"){
					console.log("descending");
					this.getDesMembers();
				}else if(value === "choose"){
					console.log("default");
					this.getMembers();
				}
			}
		
	}

	/*handleSubmit() is called in order to add a new member to the database
	only when the user enters a 'last_name', 'first_name', and 'email_address'
	into the form before hitting the submit button that calls this function
	and refreshes the page afterward to display the contents of the database
	after the function is used*/
	handleSubmit(event){
		const {member} = this.state;
		if(member.last_name === "" || member.first_name === "" || member.email_address === "")
		{
			alert("Enter a value in the required fields:\n\n Last Name   First Name   Email Address");
		}else{
			this.addMember();
			window.location.reload(false);

			alert('the values are: ' + this.last.value + ', ' + this.first.value + ', ' + member.email_address + ', ' + this.pos.value + ', ' + this.town.value);
		}
    	event.preventDefault();

    	
	}

	/*handleRemove() is called with the check box form and deletes the element
	that is checked from the database and refreshes the page to display the contents
	of the database after the function is used*/
	handleRemove(event)
	{
		const {name, value, type, checked} = event.target
		const {member} = this.state;
		alert("YOU ARE DELETING " + this.mail.value);
    	fetch(`http://localhost:5000/description/del?email_address=${this.mail.value}`)     	
      	.then(response => response.json())
      	.then(response => this.setState({members: response.data}))
      	.catch(err => console.error(err))
		window.location.reload(false);
	}

	/*componentDidMount() is the function that activates the moment the
	page successfully loads. This will call the getMembers() function 
	which allows the users to immediatley see a list of all the members
	currently in the database*/
	componentDidMount(){
		
    		
    	this.getMembers();
  
	}

	
	/*getMembers() uses a fetch() command in order to get the data from
	the given url. This data is from the database and it is converted into
	json data and is then displayed onto the web page*/
	getMembers(){
    fetch('http://localhost:5000/description')
      .then(response => response.json())
      .then(response => this.setState({members: response.data}))
      .catch(err => console.error(err))
  	}

  	/*getAscMembers() uses a fetch() command in order to get the data from
	the given url. This data is from the database and it is converted into
	json data and is then displayed onto the web page in ascending order*/
  	getAscMembers(){
  		fetch('http://localhost:5000/description/asc')
      		.then(response => response.json())
      		.then(response => this.setState({members: response.data}))
      		.catch(err => console.error(err))
      	
  	}

  	/*getAscMembers() uses a fetch() command in order to get the data from
	the given url. This data is from the database and it is converted into
	json data and is then displayed onto the web page in descending order*/
  	getDesMembers(){
  		fetch('http://localhost:5000/description/des')
      		.then(response => response.json())
      		.then(response => this.setState({members: response.data}))
      		.catch(err => console.error(err))
  	}


  	/*rendermember is used later on in order to help create a 'map' of the
  	data we get from the url pages and give each of those elements a checkbox
  	input type*/
  	renderMember = (({last_name,first_name,email_address,position,town}) => 
  		<div>
  			<input type="checkbox" value={email_address} name = {last_name} onChange={this.handleChange} ref = {(mail) => this.mail = mail}/>
  			<br/>{last_name} {first_name}
  			<br/>{email_address}
  			<br/>{position}, {town}
  			<br/>
  			<br/>
  		</div>
  	)
  	
  	/*addMember() is just an easier way to call the code needed to add 
  	a new person to the database*/
  	addMember() {
    	const {member} = this.state;
    	fetch(`http://localhost:5000/description/add?last_name=${member.last_name}&first_name=${member.first_name}&email_address=${member.email_address}&position=${member.position}&town=${member.town}`)     	
      	.then(response => response.json())
      	.then(response => this.setState({members: response.data}))
      	.catch(err => console.error(err))
  	}

  	/*delMember() is just an easier way to call the code needed to remove
  	a person from the database*/
  	delMember() {
    	const {member} = this.state;

    	fetch(`http://localhost:5000/description/del?email_address=${member.email_address}`)     	
      	.then(response => response.json())
      	.then(response => this.setState({members: response.data}))
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

				
					<div className = "output">
						<br/>
						<label>Team member list: </label>

						<select 
							value = {this.state.sort}
							onChange={this.handleChange}
							name = "sort"
						>
							<option value = "choose">Choose One</option>
							<option value="des">Descending</option>
  							<option value="asc">Ascending</option>
  							
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
						<button onClick={this.handleRemove}>Remove</button>

					</div>
				
					

			</main>


		)
	}
}
export default App