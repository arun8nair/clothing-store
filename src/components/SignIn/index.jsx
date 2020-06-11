import React, {Component} from 'react';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils.js';
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

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
         try {
             await auth.signInWithEmailAndPassword(email, password);
             this.setState({email: '',  password: ''})
         } catch(error) {
             console.log("error signing in", error)
         }

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
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;