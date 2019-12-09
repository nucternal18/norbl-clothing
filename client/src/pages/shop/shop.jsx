import React, {useEffect, Suspense, lazy} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionsPageContainer = lazy(() => import('../collection-page/collection-page.container'));



const ShopPage = ({fetchCollectionsStart, match}) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

        return (
            <div>
                <Suspense  fallback={<Spinner />}>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                    <Route path={`${match.url}/:collectionId`} component={CollectionsPageContainer} />
                </Suspense>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage);