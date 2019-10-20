import React from 'react';
import styled, { css } from 'styled-components';


const CustomButton = ({children, ...otherProps}) => {
    return (
        <CustomButtonContainer {...otherProps} >
            {children}
        </CustomButtonContainer>
    )
}


const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    width: 80%;
    opacity: 0.4;
    position: absolute;
    top: 255px;

    &:hover {
        background-color: black;
        color: white;
        border: none;
        opacity: 0.85;
        display: flex;
    }
`
const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`
const ButtonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        
    }
`
const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return GoogleSignInStyles
    }

    return props.inverted ? InvertedButtonStyles : ButtonStyles
}

const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;

export default CustomButton;
