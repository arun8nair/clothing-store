import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/CollectionPreview';

class ShopPage extends Component {

    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        console.log(collections)
        return (    
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
                }
            </div>
        )
    }
}

export default ShopPage;    