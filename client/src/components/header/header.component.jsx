import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';
// @ts-ignore
import logo from '../../assests/logo.png';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDrop from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';


const Header = ({currentUser, hidden, signOutStart}) => {
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
                            <OptionDiv onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`
const LogoContainer = styled(Link)`
    height: 50px;
    width: 50px;
    padding: 5px 25px 25px 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
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

    @media screen and (max-width: 800px) {
        width: 80%;
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);

