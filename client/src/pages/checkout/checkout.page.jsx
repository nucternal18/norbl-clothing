import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import styled from 'styled-components';



const CheckoutPage = ({cartItems, total}) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalContainer>TOTAL: ${total}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
        <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    button {
        margin-left: auto;
        margin-top: 50px;
    }
    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    &:last-child {
        width: 8%;
    }
    @media screen and (max-width: 800px) {
        width: 22%
        &;last-child {
        width: 12%;
        }
    }
`;

const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

const WarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);
