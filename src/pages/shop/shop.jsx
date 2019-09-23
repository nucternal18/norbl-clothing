import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection-page/collection-page.pages';
import './shop.scss'

const ShopPage = ({ match }) => {
    return (
    <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
    </div>
    )
}



export default ShopPage;