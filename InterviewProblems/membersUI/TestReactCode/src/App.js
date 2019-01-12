import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit( event ) {
    //const path = 'http://localhost/phpmyadmin/hi.php';
    event.preventDefault();
    axios({
      method:'post',
      url: 'http://localhost/phpmyadmin/contact_form/src/api/index.php',
      headers:{'content-type':'application/json'},
      data: this.state
    })
      .then(result =>{
        this.setState({
          mailSent:result.data.sent
        })
      })
      .catch(error => this.setState({error: error.message }));
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <p>Contact Me</p>
        <div>
          <form action="#">
            <label>First Name</label>
            <input type = "text" id = "fname" name = "firstname" placeholder = "Your name.."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value})}
            />
            <label>Last Name</label>
            <input type = "text" id = "lname" name = "lastname" placeholder = "Your last name.."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value})}
            />

            <label>Email</label>
            <input type = "email" id = "email" name = "email" placeholder = "Your email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value})}
            />

            <label>Subject</label>
            <textarea id = "subject" name = "subject" placeholder = "Write something.."
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value})}
            ></textarea>

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
            
            <div>
              {this.state.mailSent && 
                <div>Thank you for contacting us.</div>
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
