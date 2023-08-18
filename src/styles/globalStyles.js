import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import colors from "./colors";

const customReset = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    :root {
        --vh: 100%;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: none;
        background-color: transparent;
        border: 0;
        border: none;
        padding: 0;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease 0s;
            filter: brightness(0.6);
        }
    }
    a {
        text-decoration: none;
        
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
        color: #ffffff;
        overflow-wrap: break-word;
    }
    textarea,
    input {
        border: none;
        resize: none;
        outline: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-user-select: text;
        font-size: 16px;
    }
    input::placeholder{
        color: ${colors.gray2};
    }
    /* Chrome autofill 스타일 제거, 커스텀 */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${customReset}

    * {
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color:rgba(255,255,255,0);
    }
    
    /* 빅데스크탑 */
    html{
        font-size: 62.5%;
    }
    
    @media screen and (max-width:1799px) {
        /* 데스크탑 */
        html{
            font-size: 50%;
        }
    }
    @media screen and (max-width:1199px) {
        /* 데스크탑 */
        html{
            font-size: 45%;
        }
    }

    @media screen and (max-width:991px) {
        /* 타블렛 */
        html{
            font-size: 40%;
        }
    }
    @media screen and (max-width:767px) {
        /* 모바일 */
        html{
            font-size: 30%;
        }
    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Pretendard';
        background-color: ${colors.bgColor};
        
    }
    .keemBody{
        display: flex;
        flex-direction: column;
        width: 61.458vw;
        min-width: 768px;
        margin: 0 auto;
    }
    .keemContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export default GlobalStyle;