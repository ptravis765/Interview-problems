import React from "react"

//props is needed in the argument for this
function ContactCard(props){
	console.log(props)
	return(
		<div className = "contact-card">
			<img src = {props.imgURL}/>
			<h3> {props.name} </h3>
			<p>Phone: {props.phone} </p>
			<p>Email: {props.email} </p>
		</div>
	)
}

export default ContactCard