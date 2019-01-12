import React from "react"
import Footer from "./Footer.js"
import Navbar from "./Navbar.js"
import MainContent from "./MainContent.js"


class App extends Component{
	constructor(){
		super()
		this.state={
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			location: "",
			isVegan: false,
			isKosher: false,
			isLactoseFree: false
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
		alert('it works!');
    	event.preventDefault();
	}

	render(){
		return(
			<main>
				<form onSubmit={this.handleSubmit}>
					<input 
						type = "text"
						value = {this.state.firstName}
						name = "firstName"
						placeholder="First Name" 
						onChange={this.handleChange}
					/>
					<br />

					<input 
						type = "text"
						value = {this.state.lastName}
						name = "lastName"
						placeholder="Last Name" 
						onChange={this.handleChange}
					/>
					<br />

					<input 
						type = "text"
						value = {this.state.age}
						name = "age"
						placeholder="Age" 
						onChange={this.handleChange}
					/>
					<br />

					<br/>
					<label>
						<input 
							type="radio" 
							name = "gender"
							value = "male"
							checked={this.state.gender === "male"}
							onChange = {this.handleChange}
						/> Male
					</label>

					<br/>
					<label>
						<input 
							type="radio" 
							name = "gender"
							value = "female"
							checked={this.state.gender === "female"}
							onChange = {this.handleChange}
						/> Female
					</label>

					<br/>
					<label>Favorite color: </label>

					<select 
						value = {this.state.location}
						onChange={this.handleChange}
						name = "location"
					>
  						<option value="New York">New York</option>
  						<option value="Brooklyn">Brooklyn</option>
  						<option value="Queens">Queens</option>
					</select>


					<br />
					<label>
						<input 
							type="checkbox" 
							name = "isVegan"
							checked={this.state.isVegan}
							onChange = {this.handleChange}
						/> vegetarian
					</label>
					<br />
					<label>
						<input 
							type="checkbox" 
							name = "isKosher"
							checked={this.state.isKosher}
							onChange = {this.handleChange}
						/> kosher
					</label>
					<br />
					<label>
						<input 
							type="checkbox" 
							name = "isLactoseFree"
							checked={this.state.isLactoseFree}
							onChange = {this.handleChange}
						/> lactose free
					</label>

					<br/>
					<button>Submit</button>
				</form>

				<br/>
				<h2> Entered information:</h2>
				<p> Your name: {this.state.firstName} {this.state.lastName}</p>
				<p> Your age: {this.state.age}</p>
				<p> Your gender: {this.state.gender}</p>
				<p> Your location: {this.state.location}</p>
				<p>
					Your diet:
					<p>Vegan: {this.state.isVegan ? "Yes" : "no"}</p>
					<p>Kosher: {this.state.isKosher ? "Yes" : "no"}</p>
					<p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "no"}</p>
				</p>

			</main>
		)
	}
}
export default App