import React, {Component} from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton'; 
import './SignIn.scss';

class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        type="email" 
                        label="Email"
                        required />
                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        type="password" 
                        label="Password"
                        required />
                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;