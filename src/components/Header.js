import React from "react"; 

import logo_small from "../images/logo-small.png";
import { Link } from "react-router-dom";
import ButtonLogin from "./button/button-login";
import ButtonProduct from "./button/button-product";
import { styled } from "styled-components";
import ButtonMy from "./button/button-my";

const StyleNavbar = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.125vw;

    img{
        width: 13.75vw;
    }
`

const Header = ({isLogin}) => {
    const style = {
        display: "flex",
        flexDirection: "row",
        gap: "24px"
    }

    return (
        <StyleNavbar>
            <Link to="/">
                <img src={logo_small} alt="logo_small" id="logo_small"/>
            </Link>
            <div style={style}>
                <ButtonProduct/>
                {!isLogin && <ButtonLogin/> }
                {isLogin && <ButtonMy id={localStorage.getItem('userId')}/>}
            </div>
        </StyleNavbar>
    )
};

export default Header;