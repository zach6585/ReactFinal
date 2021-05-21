import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users'
import { Link, Redirect } from 'react-router-dom';

class UserLogin extends Component {
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
        // this.setState({ submitted: true });
        const allUsers = fetchUsers();
        console.log(allUsers)
        if (this.state.user.username && this.state.user.password) {
            let exists = false
            for (const i in allUsers){
                if (i.username === this.state.user.username){
                    exists = true;
                    this.setState({user: {username: '', password: ''}});
                    <Redirect to="/"></Redirect>
                }
            }
            if (exists === true){

                <Redirect to="/"></Redirect>
            }
            else{
                this.setState({...this.state, submitted: true});
                <Redirect to="/music"></Redirect>
            }
            
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

const mapStateToProps = state => {
    return {user: state.user}
}
export default connect(mapStateToProps)(UserLogin);     








 