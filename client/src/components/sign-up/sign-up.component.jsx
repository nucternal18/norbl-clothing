// @ts-nocheck
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import styled from 'styled-components';


const SignUp = ({signUpStart}) => {
    
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({displayName, email, password})
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({...userCredentials, [name]: value });
    }

        return (
            <SignUpContainer>
                <SignUpTitle>Don't have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        autoComplete='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        autoComplete='password'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
                
            </SignUpContainer>
        );
}

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const SignUpTitle = styled.h2`
    margin: 10px 0;
`;

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);