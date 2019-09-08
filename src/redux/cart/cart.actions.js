import { CartActionTypes } from './cart.types';
export const toggleCartHidden = item => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
