import React from 'react';

import styled from 'styled-components';


import Directory from '../../components/directory/directory';


const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default Homepage
