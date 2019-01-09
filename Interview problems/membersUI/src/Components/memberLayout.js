import React from "react"

function memberLayout(props){

	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}
	

	return(
		<div className="members-layout">
			<p>{props.first_name}</p>
		</div>
	)
}

export default memberLayout