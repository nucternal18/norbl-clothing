import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_LwiIokNugIjPZTDhvh3caIYZ00U4JgoN5X';

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
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
