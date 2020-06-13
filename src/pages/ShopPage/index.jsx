import React from 'react';
import { Route  } from "react-router-dom";
import CollectionPage from "../CollectionPage";
import CollectionsOverview from '../../components/CollectionsOverview';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)


export default ShopPage;    