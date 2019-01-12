import React from "react"
import Footer from "./Footer.js"
import Navbar from "./Navbar.js"
import MainContent from "./MainContent.js"

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
function App()
{
	return (
		<div>
			<Navbar />
			<MainContent />

			//This is using the Footer function from the 'Footer.js' file
			<Footer />
		</div>
	)
}
export default App