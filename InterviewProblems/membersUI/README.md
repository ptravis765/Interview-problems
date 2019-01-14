This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


---------------------------------------------------------------------------------------------------------------------------

This folder contains all the files I used in order to create my ReactJS app


index.html:
This file is located in the 'src' folder and is used in order to create a way for the web page to be viewed by users


index.js:
This file is located in the 'src' folder and is used to create the connection between the ReactJS file (App.js) and the html page that 
will be showing it.


style.css:
This file is located in the 'src' folder and contains the code for all the decorations of the page, such as the form designs.


App.js:
This file is contained in the 'src' folder and contains the code that allows the ReactJS app to perform all of its functions as well as incorporate its own 'html' applications that will be used to further decorate it on the html page.


As for my choice behind most of the designs I tried my best to follow the example IPPSec gave me to work with. I did try to experiment
a little and see how it would look and work if I used a 'select' input value instead of using 'checkbox' for when members were outputted
onto the page and saw that it wouldn't have worked or be as effective as 'checkbox' would be. 'alerts' were also added after the 
'Submit' or 'Remove' button were clicked to tell the user what data is being affected. An 'alert()' is also used to warn the user
when they are submitting a new 'member' that if they hit the Submit button and the 'First Name', 'Last Name', and 'Email' input fields 
are not filled then it will prevent you from continuing as well as infform you what fields must be filled in order to continue. As for
the other 'Load' and 'Save' button those really do nothing and were just put there to try and follow the design that was wanted. 
I really could not find any use for them other than that. A deeper explanation of how the code is used is further explained in the 
files themselves, I made sure to put comments and explain as best as I can what each component is used for. It would be best to view the 
mentioned files (index.html, index.js, style.css, and App.js) to actually view the code responsible for the UI application.



-------------------------------------------------------------------------------------------------------------------------
This code contains 3 minor flaws that I was not able to fix in time:

1. Has to do when you put the elements in ascending or descending
order. Say that your name is at the end and I want it first so I put
it in descending order. When I click on your text box and hit the
"Delete" button instead of deleting you it deletes the element that
was there before.

2. can only delete one thing at a time. Multiple check boxes
checked does not mean all of those things will be removed

3. When a new member is submitted into the database unless "Default" is picked for the drop down selection option it will appear at the 
top of the list for both "Ascending" or "Descending" while all the other values are affected the way they should be.
