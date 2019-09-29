import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux'
import logo from '../../assests/logo.png';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDrop from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo src={logo} alt="logo"  />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink  to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        (
                            <OptionDiv onClick={() => auth.signOut()}>
                            SIGN OUT
                            </OptionDiv>
                        ) : (
                            <OptionLink  to='/signin'>
                                SIGN IN
                            </OptionLink >
                        )
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDrop />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
const LogoContainer = styled(Link)`
    height: 50px;
    width: 50px;
    padding: 5px 25px 25px 25px;
`
const Logo = styled.img`
    height: 50px;
    width: 50px;
`
const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`
const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`
const OptionDiv = styled.div`
${OptionContainerStyles}
`
export default connect(mapStateToProps)(Header);

