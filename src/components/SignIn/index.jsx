import React, {Component} from 'react';
import { connect } from "react-redux";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton'; 
import { googleSignInStart, emailSignInStart } from "../../redux/user/userActions";
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
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
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
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);