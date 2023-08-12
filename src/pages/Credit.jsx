import React, { useState} from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import logo_skrr_black from "../images/logo-skrr-black.png";
import credit_product from "../images/product.png";
import likelion from "../images/likelion.png";

function Credit() {
    const [currentDate] = useState(new Date()); // 현재 날짜 상태
    const futureDate = new Date(currentDate);

    futureDate.setDate(futureDate.getDate() + 28);

    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    const futureYear = futureDate.getFullYear();
    const futureMonth = (futureDate.getMonth() + 1).toString().padStart(2, '0');
    const futureDay = futureDate.getDate().toString().padStart(2, '0');

    // 두 제품의 가격
    const productPrice1 = 120000;
    const productPrice2 = 120000;

    // 두 제품 가격의 합계 계산
    const totalPrice = productPrice1 + productPrice2;

    const [showNoCreditMessage, setShowNoCreditMessage] = useState(false);
    const [radioChecked, setRadioChecked] = useState(false);

    const handlePaymentSubmit = () => {
        const checkedRadio = document.querySelector('input[type="radio"]:checked');
        if (!checkedRadio) {
            setShowNoCreditMessage(true);
        } else {
            setShowNoCreditMessage(false);
            setRadioChecked(true);
        }
    };

    return (
        <div class="credit">
            <nav id="creditNav">
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

            <div class="creditBody">
                <div class="creditBox">
                    <img src={logo_skrr_black} id="logo_skrr_black" alt="logo_skrr_black"/>
                    <p id="creditTitle">결제하기</p>
                </div>

                <div class="creditContainer">
                    <p id="creditNumber">총 2종류</p>
                    <div class="creditProduct">
                        <img src={credit_product} id="credit_product" alt="credit_product"/>
                        <div class="creditProductRight">
                            <div class="creditProductBox">
                                <p id="creditProductTitle">애플 에어팟 맥스</p>
                                <p id="creditProductNumber">20개</p>
                                <p id="creditProductTime">{currentYear}. {currentMonth}. {currentDay} ~ {futureYear}. {futureMonth}. {futureDay}.</p>
                            </div>
                            <div class="creditProductBox2">
                                <p id="creditProductPrice">120,000원</p>
                            </div>
                        </div>
                    </div>
                    <div class="creditProduct">
                        <img src={credit_product} id="credit_product" alt="credit_product"/>
                        <div class="creditProductRight">
                            <div class="creditProductBox">
                                <p id="creditProductTitle">애플 에어팟 맥스</p>
                                <p id="creditProductNumber">20개</p>
                                <p id="creditProductTime">{currentYear}. {currentMonth}. {currentDay} ~ {futureYear}. {futureMonth}. {futureDay}.</p>
                            </div>
                            <div class="creditProductBox2">
                                <p id="creditProductPrice">120,000원</p>
                            </div>
                        </div>
                    </div>

                    <div class="creditBar"></div>

                    <div class="creditDiscount">
                        <p id="creditDiscountTitle">할인 적용</p>
                        <div class="creditDiscountRight">
                            <div class="creditRight1">
                                <p id="creditRight1Title">보유 쿠폰 0장</p>
                                <input type="text" id="creditRight1Box"></input>
                            </div>
                            <div class="creditRight2">
                                <p id="creditRight2Title">포인트</p>
                                <input type="text" id="creditRight2Box"></input>
                            </div>
                        </div>
                    </div>

                    <div class="creditBar"></div>

                    <div class="creditWay">
                        <p id="creditWayTitle">결제 방식</p>
                        <form className="radioForm">
                            <label id="radioLabel">
                                <input type="radio" name="deposit" value="deposit" onChange={handlePaymentSubmit}/>
                                <span id="radioTitle">무통장입금</span>
                            </label>
                        </form>
                    </div>

                    <div class="creditBar"></div>

                    <div class="totalCredit">
                        <p id="totalCreditTitle">총 결제 내역</p>
                        <p id="totalCreditPrice">{totalPrice.toLocaleString()}원</p>
                    </div>

                    <div class="noCreditBox" style={{ display: showNoCreditMessage ? 'flex' : 'none' }}>
                        <div class="noCredit">결제 방식을 선택해주세요.</div>
                    </div>

                    <div className="creditBtn">
                        {radioChecked ? (
                            <Link to="/creditSuccess">
                                <button id="creditButton">결제하기</button>
                            </Link>
                        ) : (
                            <button id="creditButton" onClick={handlePaymentSubmit}>결제하기</button>
                        )}
                    </div>
                </div>
            </div>

            <footer id="creditFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default Credit
