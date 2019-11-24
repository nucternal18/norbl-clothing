import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import PreviewCollection from '../../components/preview-collections/preview-collections.components';

import styled from 'styled-components';

const CollectionsOverview = ({ collections, match }) => {
    
    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    )
}

const CollectionsOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
