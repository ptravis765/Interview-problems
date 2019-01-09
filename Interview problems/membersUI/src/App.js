import React, {Component} from 'react';

import members from "./Components/members.js"
import memberLayout from "./Components/memberLayout.js"


class App extends Component{
	constructor(){
		super()
		this.state={
			firstName: "",
			lastName: "",
			email: "",
			position: "",
			town: "",
			sort: "Sort By"
		}
		this.handleChange = this.handleChange.bind(this)
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
		alert('need to add the function code that inputs this into the database');
    	event.preventDefault();
	}

	render(){
		const memberComponents = members.map(mem => <memberLayout key = {mem.last_name} first_name={mem.first_name}/>)
	
		return(
			<main>
				<form onSubmit={this.handleSubmit}>
					<div className = "addMember">
						<h2>Add Team Member</h2>

						<input 
							type = "text"
							value = {this.state.lastName}
							name = "lastName"
							placeholder="Last Name" 
							onChange={this.handleChange}
						/>
						<br />
						<br />

						<input 
							type = "text"
							value = {this.state.firstName}
							name = "firstName"
							placeholder="First Name" 
							onChange={this.handleChange}
						/>
						<br />
						<br />

						<input 
							type = "text"
							value = {this.state.email}
							name = "email"
							placeholder="Email Address" 
							onChange={this.handleChange}
						/>
						<br />
						<br />

						<input 
							type = "text"
							value = {this.state.email}
							name = "email"
							placeholder="Email Address" 
							onChange={this.handleChange}
						/>
						<br />
						<br />

						<input 
							type = "text"
							value = {this.state.email}
							name = "email"
							placeholder="Email Address" 
							onChange={this.handleChange}
						/>
						<br />
						<br />

						<button>Submit</button>
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

						<div className = "members">
							{memberComponents}
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