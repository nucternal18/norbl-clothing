import React, { Component } from 'react';

import ShopData from './shop.data';
import PreviewCollection from '../../components/preview-collections/preview-collections.components'
import './shop.scss'

class ShopPage extends Component {
    state = {
        collections: ShopData,
    }

    render() {
        console.log(this.state.collections)
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;