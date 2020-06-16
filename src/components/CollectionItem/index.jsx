import React, {useContext} from 'react';
import {CartContext} from "../../providers/cart/CartProvider";
import '../CustomButton';
import './CollectionItem.scss';
import CustomButton from '../CustomButton';

const CollectionItem = ({item}) => {
    const {id, name, price, imageUrl} = item;
    const { addItem } = useContext(CartContext);
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

export default CollectionItem;