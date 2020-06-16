import React,{useContext} from 'react';
import CollectionItem from '../../components/CollectionItem';
import CollectionsContext from "../../contexts/collections/CollectionsContext";

import './CollectionPage.scss';

const CollectionPage = ({match}) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { items, title } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">
                {title}
            </h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPage;