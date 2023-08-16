import React from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import logo_skrr_black from "../images/logo-skrr-black.png";
import likelion from "../images/likelion.png";

function RentalSuccess() {
    return (
        <div class="RentalSuccess">
            <nav id="RentalSuccessNav">
                <div class="logo-small">
                    <Link to="/">
                        <img src={logo_small} alt="logo_small" id="logo_small" />
                    </Link>
                </div>
                <div class="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login">MY PAGE</button>
                </div>
            </nav>

            <div class="RentalSuccessBody">
                <img src={logo_skrr_black} id="logo_skrr_black" alt="logo_skrr_black" />
                <p id="RentalSuccessTitle">대여 신청이 완료되었어요!</p>
                <p id="RentalSuccessSubTitle">자유롭게 사용하시고, 대여일정을 꼭 지켜주세요!</p>

                <div class="RentalSuccessBtn">
                    <button id="RentalSuccess_Home"><Link to="/home">홈으로 가기</Link></button>
                </div>
            </div>

            <footer id="RentalSuccessFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default RentalSuccess
