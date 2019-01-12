import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import MyInfo from "./Components/MyFile.js"

import App from "./App.js"

import "./style.css";



//import HelloWorld from "./HelloWorld";
//import "./index.css";


//Takes 2 arguments. What you want to render and where you want to render it
//Uses the language JSX

//Cannot do something like <h1>Hello World</h1> <p>This is a paragraph</p>
//You can do it when a <div> is wrapped around them

/*ReactDOM.render(
	<div>
		<h1> Hello World </h1>
		<p>This is a paragraph</p>
		<li>Hi</li>
		<li>Hello</li>
		<li>How you doing</li>
	</div>,
	document.getElementById("root")
);*/

//Or when a <ul> (unordered list) is used
/*ReactDOM.render(
	<ul>
		<li>Hi</li>
		<li>Hello</li>
		<li>How you doing</li>
	</ul>,
	document.getElementById("root")
);*/


//Do not stick entire code into one render
//create functions

/*function MyApp(){
	return (
		<ul>
			<li>Hi</li>
			<li>Hello</li>
			<li>How you doing</li>
		</ul>
	)
}

ReactDOM.render(
	<MyApp/>,
	document.getElementById("root")
);*/

/*function MyInfo()
{
	return(
		<div>
			<h1> Travis Peterson </h1>
			<p> I am tired </p>
			<ul>
				<li>Canada</li>
				<li>Hawaii</li>
				<li>japan</li>
			</ul>
		</div>
	)
}*/

//You are now calling the MyInfo function from another file by using the 'import MyInfo from "./MyFile.js"'
//It was now moved into a new file called Components so the directory is now 'import MyInfo from "./Components/MyFile.js"'
/*ReactDOM.render(
	<App/>,
	document.getElementById("root")
);*/


/*function App(){
	const firstName = "Bob"
	const lastName = "Ziroll"
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay

	if(hours < 12){
		timeOfDay = "morning"
	}else if (hours >= 12 && hours < 17){
		timeOfDay = "afternoon"
	}else{
		timeOfDay = "night"
	}
	//When doing in-line style there can be no '-'. Instead make it camel case
	const styles ={
		color: "#FF8C00",
		backgroundColor: "#FF2D00",
		fontSize: 20
	}
	//<h1 style = {{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Hello {firstName + " " + lastName}</h1>
	return(
		<div>
			
			<h1 style = {styles}>Hello {firstName + " " + lastName}</h1>
			<h2>It is currently about {date.getHours() % 12} o'clock</h2>
			<h3>Good {timeOfDay}</h3>
		</div>	
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById("root")
);*/


//You are now calling the MyInfo function from another file by using the 'import MyInfo from "./MyFile.js"'
//It was now moved into a new file called Components so the directory is now 'import MyInfo from "./Components/MyFile.js"'
ReactDOM.render(
	<App/>,
	document.getElementById("root")
);

/*class App extends React.Component{
	render(){
		return(
			<div>
				<Header username="vschool"/>
				<Greeting />
			</div>
		)
	}
}

class Header extends React.Component{
	render(){
		return(
			<header>
				<p>Welcome, {this.props.username}</p>
			</header>
		)
	}
}

class Greeting extends React.Component{
	render()
	{
		const firstName = "Bob"
		const lastName = "Ziroll"
		const date = new Date()
		const hours = date.getHours()
		let timeOfDay

		if(hours < 12){
			timeOfDay = "morning"
		}else if (hours >= 12 && hours < 17){
			timeOfDay = "afternoon"
		}else{
			timeOfDay = "night"
		}
		const styles ={
			color: "#FF8C00",
			backgroundColor: "#FF2D00",
			fontSize: 20
		}
		return(
			<div>
			
				<h1 style = {styles}>Hello {firstName + " " + lastName}</h1>
				<h2>It is currently about {date.getHours() % 12} o'clock</h2>
				<h3>Good {timeOfDay}</h3>
			</div>	
		)

	}
	
}

ReactDOM.render(<App />,document.getElementById("root"))*/