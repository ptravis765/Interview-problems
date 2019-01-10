
import React, {Component} from 'react';
import jquery from 'jquery';
import axios from 'axios';
const $ = window.$;

//import members from "./Components/members.js"
//import memberLayout from "./Components/memberLayout.js"

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
			array: []
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
			this.setState({
				//[event.target.name]: event.target.value
				[name]: value
			})
		}
	}

	handleSubmit(event){
		/*var data = require('./members.json');
		for(var i = 0; i < data.length; i++){
			var obj = data[i];
			console.log("Name: " + obj.last_name);
		}*/
		if(this.last.value === "" || this.first.value === "" || this.mail.value === "")
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
			axios.post(
				'./submit.php',{
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
			})
			/*$.ajax({

			});*/


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
    	axios.get('./members.json')
    		.then(res =>{
    			console.log(res.data[0].last_name);
    			this.setState(
    				{array: res.data}
    			);
    		//this.setState({members: res.data});
    		})
    		.catch((err)=>{})
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

	render(){
		console.log(this.state.array);
		//const memberComponents = members.map(mem => <memberLayout key = {mem.last_name} first_name={mem.first_name}/>)
	
		return(
			<main>
				<form onSubmit={this.handleSubmit}>
					<div className = "addMember">
						<h2>Add Team Member</h2>

						<input 
							id = "lastName"
							type = "text"
							value = {this.state.lastName}
							name = "lastName"
							placeholder="Last Name" 
							onChange={this.handleChange}
							ref = {(last) => this.last = last}
						/>
						<br />
						<br />

						<input 
							id = "firstName"
							type = "text"
							value = {this.state.firstName}
							name = "firstName"
							placeholder="First Name" 
							onChange={this.handleChange}
							ref = {(first) => this.first = first}
						/>
						<br />
						<br />

						<input 
							id = "email"
							type = "text"
							value = {this.state.email}
							name = "email"
							placeholder="Email Address" 
							onChange={this.handleChange}
							ref = {(mail) => this.mail = mail}
						/>
						<br />
						<br />

						<input 
							id = "position"
							type = "text"
							value = {this.state.position}
							name = "position"
							placeholder="Position" 
							onChange={this.handleChange}
							ref = {(pos) => this.pos = pos}
						/>
						<br />
						<br />

						<input 
							id = "town"
							type = "text"
							value = {this.state.town}
							name = "town"
							placeholder="Town" 
							onChange={this.handleChange}
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
  							<option value="ascending">Ascending</option>
  							<option value="descending">Descending</option>
						</select>

						
						
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