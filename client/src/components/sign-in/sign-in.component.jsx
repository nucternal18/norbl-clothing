import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = e => {
        const { value, name } = e.target;

        setCredentials({...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
        <SignInTitle>Already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={handleChange}
            label='email'
            required
            />
            <FormInput
            type='password'
            name='password'
            autoComplete='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
            />
            <ButtonsBarContainer>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton
                type='button'
                onClick={googleSignInStart}
                isGoogleSignIn
            >
                {''}Sign In with Google{''}
            </CustomButton>
            </ButtonsBarContainer>
        </form>
        </SignInContainer>
    );
};

const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`;

const SignInTitle = styled.h2`
    margin: 10px 0;
`;

const ButtonsBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});
export default connect(null, mapDispatchToProps)(SignIn);
