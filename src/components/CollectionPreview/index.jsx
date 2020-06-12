import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem';

const CollectionPreview = ({items, title}) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).
                map((item) => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)

export default CollectionPreview;