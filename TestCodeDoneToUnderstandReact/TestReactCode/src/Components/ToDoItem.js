import React from "react"

function ToDoItem(props){

	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}
	

	return(
		<div className="todo-item">
			<input 
				type ="checkbox" 
				checked={props.completed} 
				onChange={() => props.handleChange(props.text)} 
			/>
			<p style={props.completed ? completedStyle: null}> 
				{props.text}
			</p>
		</div>
	)
}

export default ToDoItem