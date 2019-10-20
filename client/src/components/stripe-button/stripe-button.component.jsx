import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_LwiIokNugIjPZTDhvh3caIYZ00U4JgoN5X';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            console.log(response)
            alert('Payment Successful')   
        }).catch(error => {
            console.log('Payment error: ', error);
            alert(
                'There was an issue with your payment. Please ensure you have entered the right details and sufficient funds is available to purchase your items'
            )
        })
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Norbl Clothing'
            billingAddress
            shippingAddress
            image='https://res.cloudinary.com/dus5nxe5w/image/upload/c_scale,w_623/v1569361428/logo_lvaduw.png'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
