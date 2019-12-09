// @ts-nocheck
import React, { Component } from 'react';

import styled from 'styled-components';

class ErrorBoundary extends Component {
    constructor() {
        // @ts-ignore
        super();

        this.state = {
            hasErrored: false
        }
        
    }
    

    static getDerivedStateFromError(error) {
        //process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
                    <ErrorImageText>Sorry this page is broken. A Dog Ate this Page </ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }

}

const ErrorImageOverlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorImageContainer = styled.div`
    display: inline-block;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    width: 40vh;
    height: 40vh;
`;

const ErrorImageText = styled.h2`
    font-size: 28px;
    color: #2f8e89;
`;

export default ErrorBoundary;