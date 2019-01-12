import React, {Component} from "react"
import Footer from "./Components/Footer.js"
import Navbar from "./Components/Navbar.js"
import MainContent from "./Components/MainContent.js"
import Header from "./Components/Header.js"


import ContactCard from "./Components/ContactCard.js"
import Joke from "./Components/Joke.js"
import jokesData from "./Components/jokesData.js"

import Product from "./Components/Product.js"
import productsData from "./Components/vschoolProducts.js"

import ToDoItem from "./Components/ToDoItem.js"
import todoData from "./Components/todoData.js"

import Conditional from "./Conditional"

/*function App()
{
	return (
		<div>
			<nav>
				<h1> Hello </h1>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</nav>
			<main>
				<p> This is where most of the content will go </p>
			</main>

			//This is using the Footer function from the 'Footer.js' file
			<Footer />
		</div>
	)
}*/

//This version of App uses components from other files
/*function App()
{
	return (
		<div>
			<Navbar />
			<MainContent />

			//This is using the Footer function from the 'Footer.js' file
			<Footer />
		</div>
	)
}*/

//function App()
//{
	/*return(
		<div>
			
			<input type ="checkbox" />
			<p>Placeholder text here</p>

			<input type ="checkbox" />
			<p>Placeholder text here</p>

			<input type ="checkbox" />
			<p>Placeholder text here</p>

			<input type ="checkbox" />
			<p>Placeholder text here</p>
		</div>
	)*/

	/*return(
		<div className = "todo-list">
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
		</div>
	)*/

	/*return(
		<div className="contacts">
			<ContactCard 
				name = "Mr" 
				imgURL ="something"
				phone = "(212)"
				email = ".com"
			/>
			<ContactCard 
				name = "Mrs" 
				imgURL ="something else"
				phone = "(212212)"
				email = ".comcom"
			/>
			<ContactCard 
				name = "Mr Mrs" 
				imgURL ="something else else"
				phone = "(212212212)"
				email = ".comcomcom"
			/>
			<ContactCard 
				name = "Mr Mrs Mr" 
				imgURL ="something else else else"
				phone = "(212212212212)"
				email = ".comcomcomcom"
			/>
		</div>
	)*/


	

	/*return(
		<div>
			<Joke 
				question = "what is your name?"
				answer = "who cares"
			/>
			<Joke 
				question = "what is your favorite color?"
				answer = "who cares"
			/>
			<Joke 
				question = "what is your sister's name?"
				answer = "who cares"
			/>
			<Joke 
				question = "what is your mother's name?"
				answer = "who cares"
			/>
			<Joke 
				question = "what is your father's name?"
				answer = "who cares"
			/>
		</div>
	)*/

	/*const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
	return (
		<div>
			{jokeComponents}
		</div>
	)*/

	/*const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

	return (
		<div>
			{productComponents}
		</div>
	)*/

//////////////////////////////////////////////////////////////////
	//HERE ALONG WITH THE FILES 'style.css', 'ToDoItem.js' AND 'todoData.js' ARE HOW YOU CAN MAKE CHECKBOXES
	/*const todoComponents = todoData.map(todo => <ToDoItem key = {todo.id} text={todo.text}/>)
	return(
		<div className = "todo-list">
			{todoComponents}
		</div>
	)*/

	//return (
		//<div>
			//<h1>Code goes here</h1>
		//</div>
	//)

//}

/*
//When using things like "props" or "todo" like used before inside of a class like this then you must do "this.props" to be used effectively 
//it must be a Class based component to use "state"
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			answer: "Yes",
			name: "Travis",
			age: "22"
		}
	}

	render(){
		//const style = this.yourMethodHere()
		//const date = new Date();
		return(
			<div>
				<h1>Is state important to know? {this.state.answer}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.age} years old</h1>
			</div>
		)
	}
}
*/

/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoggedIn: false
		}
	}
	render(){
		let wordDisplay
		if(this.state.isLoggedIn === true){
			wordDisplay = "in"
		}else{
			wordDisplay = "out"
		}
		return (
			<div>
				<h1>You are currently logged {wordDisplay}</h1>
			</div>
		)
	}

}*/


//THIS IS FOR MAKING CHECKBOXES USING THE CLASS PROPERTY
/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			todos: todoData
		}
	}

	render(){
		const todoComponents = this.state.todos.map(todo => <ToDoItem key = {todo.id} text={todo.text}/>)
		return(
			<div className = "todo-list">
				{todoComponents}
			</div>
		)
	}
}*/



//THIS IS FOR HANDLING onClick() EVENTS
/*function handleClick(){
	console.log("I was clicked")
}
function App(){
	return(
		<div>
			<img onMouseOver={() => console.log("Hovered")} src="https://www.fillmurray.com/200/100"/>
			<br/>
			<br/>
			<button onClick={handleClick}> Click</button>
		</div>
	)
}*/

//SUPPORTED EVENTS IN REACT: https://reactjs.org/docs/events.html#supported-events


//THIS GOES OVER CHANGING STATE
/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0
		}
		//any method that uses setState must be binded
		this.handleClick = this.handleClick.bind(this)
	}

	
	handleClick(){
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			}
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick = {this.handleClick}>Change!</button>
			</div>
		)
	}
}*/



//THIS IS FOR MAKING CHECKBOXES USING THE CLASS PROPERTY AND FOR MAKING SURE THAT THINGS CHANGE WHEN CLICKED
/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			todos: todoData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(text){
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if(todo.text === text){
					todo.completed = !todo.completed
					//console.log("Changed",text)
					//console.log(todo.completed)
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})

	}

	render(){
		const todoComponents = this.state.todos.map(todo => <ToDoItem key = {todo.idNum} text={todo.text}
			handleChange={this.handleChange}/>)
		return(
			<div className = "todo-list">
				{todoComponents}
			</div>
		)
	}
}*/


//LIFE CYCLE METHODS
// https://engineering.musefind.com/react-lifestyle-methods-how-and-when-to-use-them-2111a1b692b1

/*class App extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	shouldComponentUpdate(nextProps, nextState){
		//return true if want to update
		//return false if not
	}

	componentWillUnmount(){
		//remove event listener
		//tear down or clean up before component disappears
	}

	static getDerivedStateFromProps(props, state){
		// return the new updated state based upon the props
		// https://reactjs.org/blog/2018/06/07/you-probably-don't-need-derived-state.html
	}

	getSnapshotBeforeUpdate(){
		// create a backup of the current way things are
	}

	render(){
		return (
			<div>
				<h1>Code goes here</h1>
			</div>
		)
	}

}*/

/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoading: true
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render(){
		return (
			<div>
				<Conditional isLoading={this.state.isLoading}/>
			</div>
		)
	}
}*/

/*
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			unreadMessages:["a","b"]
		}
	}


	render(){
		return (
			<div>
				{
					this.state.unreadMessages.length > 0 &&
					<h2>You have {this.state.unreadMessages.length} unread messages</h2>
				}
			</div>
		)
	}
}
*/

/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			isLoggedIn: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	render(){
		let wordDisplay
		if(this.state.isLoggedIn === true){
			wordDisplay = "in"
		}else{
			wordDisplay = "out"
		}
		return (
			<div>
				<button onClick = {this.handleClick}>Change!</button>
				<h1>You are currently logged {wordDisplay}</h1>
			</div>
		)
	}
}*/


//THIS IS FOR MAKING CHECKBOXES USING THE CLASS PROPERTY AND FOR MAKING SURE THAT THINGS CHANGE WHEN CLICKED
/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			todos: todoData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(text){
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if(todo.text === text){
					todo.completed = !todo.completed
					//console.log("Changed",text)
					console.log(todo.completed)
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})

	}

	render(){
		const todoComponents = this.state.todos.map(todo => <ToDoItem key = {todo.idNum} text={todo.text}
			handleChange={this.handleChange}/>)
		return(
			<div className = "todo-list">
				{todoComponents}
			</div>
		)
	}
}*/


// GETTING DATA FROM API
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
/* https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261*/
/*class App extends React.Component{
	constructor(){
		super()
		this.state = {
			character:{}
		}
	}



	componentDidMount(){
		
		fetch("https://swapi.co/api/people/1")
			//the '.then. incorporate the 'promise' concept
			.then(response => response.json())
			//.then(data => console.log(data))
			.then(data => {
				this.setState({
					character:data

				})
			})

	}

	render(){
		return (
			<div>
				{this.state.character.name}
			</div>
		)
	}

}*/

//FORMS
// https://reactjs.org/docs/forms.html
/*class App extends Component{
	constructor(){
		super()
		this.state = {
			firstName: "",
			lastName: "",
			isFriendly: false,
			gender: "",
			favColor: "red"
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		if(type === "checkbox")
		{
			this.setState({
				[name]:checked
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
		return (
			<form onSubmit={this.handleSubmit}>
				
				<br />

				<input 
					type="text" 
					value = {this.state.firstName} 
					name="firstName" 
					placeholder="First Name" 
					onChange={this.handleChange} 
				/>

				<br />

				<input 
					type="text" 
					value = {this.state.lastName} 
					name="lastName" 
					placeholder="Last Name" 
					onChange={this.handleChange} 
				/>

				{

				}
				<br />
				<textarea 
					value={"Some default value"}
					onChange={this.handleChange}
				/>

				<br />

				<label>
					<input 
						type="checkbox" 
						name = "isFriendly"
						checked={this.state.isFriendly}
						onChange = {this.handleChange}
					/> Is friendly?
				</label>

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

				//{ Formik }

				<br/>
				<label>Favorite color: </label>

				<select 
					value = {this.state.favColor}
					onChange={this.handleChange}
					name = "favColor"
				>
  					<option value="red">red</option>
  					<option value="blue">blue</option>
  					<option value="green">green</option>
  					<option value="purple">purple</option>
				</select>

				<h1>{this.state.firstName} {this.state.lastName}</h1>
				<h2> You are a {this.state.gender} </h2>
				<h2> Your favorite color is {this.state.favColor} </h2>

				<br/>
				<button>Submit</button>
			</form>
		)
	}
}*/

//https://coursework.vschool.io/travel-form/

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