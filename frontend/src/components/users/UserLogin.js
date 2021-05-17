import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchUsers } from '../../actions/users'

class UserLogin extends Component {
    state = {
        user: {
        username: '',
        password: '', 
        },
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };
    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        const { user } = this.state;
        console.log(user)
        if (user.username && user.password) {
            console.log('here')
            const users = fetchUsers();
            console.log(users)
            const curruser = users.filter(uss => uss.username === user.username)
            if (curruser.password === user.password){
                <Redirect to="/piano"></Redirect>
            } 
            else {
                <Redirect to="/"></Redirect>;
            }
    }
        else {
            <Redirect to="/"></Redirect>
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
                <Link to="/" className="toSignUp">Don't have an account?</Link>
            </div>
        )
    }
}



export default connect()(UserLogin);    