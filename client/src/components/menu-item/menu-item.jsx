// @ts-nocheck
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


const menuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer imageUrl={imageUrl} />
                <ContentContainer>
                    <TitleContainer>{title.toUpperCase()}</TitleContainer>
                    <SubtitleContainer>SHOP NOW</SubtitleContainer>
                </ContentContainer>

        </MenuItemContainer>
    );
}

const MenuItemContainer = styled.div`
    height: ${prop => prop.size ? '380px' : '240px'};
    min-width: 40%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & .content {
            opacity: 0.9;
        }
    }

    /* &.large {
        height: 500px;
    } */

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover; 
    background-image: ${ prop => `url(${prop.imageUrl})`};
`

const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fff;
    opacity: 0.7;
    position: absolute;
`;

const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

const SubtitleContainer = styled.span`
    font-weight: lighter;
    font-size: 16px;
`


// @ts-ignore
export default withRouter(menuItem);