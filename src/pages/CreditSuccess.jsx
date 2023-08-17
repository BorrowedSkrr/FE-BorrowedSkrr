import React from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import logo_skrr_black from "../images/logo-skrr-black.png";
import likelion from "../images/likelion.png";

function CreditSuccess() {
    return (
        <div className="CreditSuccess">
            {/* <nav id="CreditSuccessNav">
                <div class="logo-small">
                    <Link to="/">
                        <img src={logo_small} alt="logo_small" id="logo_small" />
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login">MY PAGE</button>
                </div>
            </nav> */}

            <div className="CreditSuccessBody">
                <img src={logo_skrr_black} id="logo_skrr_black" alt="logo_skrr_black"/>
                <p id="CreditSuccessTitle">결제가 완료되었어요!</p>
                <p id="CreditSuccessSubTitle1">학생들에게 더 나은 교육환경을 선물하셨네요!</p>
                <p id="CreditSuccessSubTitle2">배송까지 일주일정도 걸려요</p>

                <div className="CreditSuccessBtn">
                    <button id="CreditSuccess_Home"><Link to="/home">홈으로 가기</Link></button>
                </div>
            </div>

            {/* <footer id="CreditSuccessFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer> */}
        </div>
    )
}

export default CreditSuccess
