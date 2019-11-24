import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import styled from 'styled-components';

const CollectionPage = ({ collection }) => {
    
    const { title, items } = collection;
    
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    & > div {
        margin-bottom: 30px;
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);