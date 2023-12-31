import React from "react"; 

import likelion from "../images/likelion.svg";
import { styled } from "styled-components";
import colors from "../styles/colors";

const StyleDiv = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.gray5};

    img{
        width: 33.333vw;
    }
`

const Footer = () => {

    return (
        <StyleDiv>
            <img
                src={likelion}
                alt="로고"
            />
        </StyleDiv>
    )
};

export default Footer;