import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDrop = () => (
        <div className='cart-dropdown'>
            <div className="cart-items" />
            <CustomButton>GOT TO CHECKOUT</CustomButton>
        </div>

)

export default CartDrop;
