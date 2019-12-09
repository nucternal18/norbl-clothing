import React from 'react';

import styled from 'styled-components';


const CartItem = ({ item: {imageUrl, price, name, quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`;

const CartItemImage = styled.img`
    width: 30%;
`;

const ItemDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export default React.memo(CartItem);
