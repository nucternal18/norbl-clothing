import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'
import logo from '../../assests/logo.png';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDrop from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.component.scss';

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <img src={logo} alt="logo" className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                        (
                            <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        ) : (
                            <Link className="option" to='/signin'>
                                SIGN IN
                            </Link>
                        )
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDrop />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
