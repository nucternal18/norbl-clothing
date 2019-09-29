import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import WithSpinner from '../../components/With-Spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection-page/collection-page.pages';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewithSpinner = WithSpinner(CollectionPage)
class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({loading: false})
        });
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.url}/:collectionId`} render={(props) =>
                    <CollectionPagewithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})



export default connect(null, mapDispatchToProps)(ShopPage);