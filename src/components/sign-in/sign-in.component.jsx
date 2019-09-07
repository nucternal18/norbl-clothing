import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.log(err)
        }
    };

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
        <div className='sign-in'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput
                type='email'
                name='email'
                value={this.state.email}
                handleChange={this.handleChange}
                label='email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
            />
            <div className="buttons">
                <CustomButton type='submit'> Sign In </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {''}Sign In with Google{''}
                </CustomButton>            
            </div>
            </form>
        </div>
        );
    }
}

export default SignIn;
