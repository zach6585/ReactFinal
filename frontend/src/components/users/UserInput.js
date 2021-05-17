import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/users.js'

import { Link } from 'react-router-dom';

class UserInput extends Component {
    state = {
        user: {
        username: '',
        password: '', 
        },
        submitted: false
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };
    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.username && user.password) {
            addUser(user);
    }
    }

    

    render(){
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                <h3></h3>
                    <input type="text" placeholder="username" value={this.state.username} onChange={event => 
                        this.handleUsernameChange(event)}></input>
                        <h3></h3>
                        
                    <input type="password" placeholder="password" value={this.state.password}
                    onChange={event => this.handlePasswordChange(event)}></input>
                    <h3></h3>
                    <input type="submit" value="submit"></input>
                </form>
                <h3></h3>
                <h3></h3>
                <Link to="/login" className="toLogin">Already have an account?</Link>
            </div>
        )
    }
}



export default connect()(UserInput);    