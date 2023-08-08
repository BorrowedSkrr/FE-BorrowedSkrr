import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import icon_back from "../images/icon-back.png";
import product from "../images/product.png";
import white_line_heart from "../images/white-line-heart.png";
import icon_clock from "../images/icon-clock.png";
import icon_broken from "../images/icon-broken.png";
import icon_warning from "../images/icon-warning.png";
import white_lbold_heart from "../images/white-lbold-heart.png";
import button_minus from "../images/button-minus.png"; 
import button_plus from "../images/button-plus.png";

function ProductDetail() {
    const [marginTop, setMarginTop] = useState('5.65vw');
    const [isLiked9, setIsLiked9] = useState(false);
    const [rentButtonText, setRentButtonText] = useState('대여하기');
    const [showCartButton, setShowCartButton] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleHeartClick9 = () => {
        setIsLiked9(!isLiked9);
    };

    const handleRentButtonClick = () => {
        if (rentButtonText === '대여하기') {
            setRentButtonText('결제하기');
            setShowCartButton(true);
            setShowForm(true);
            setMarginTop('5.5vw');
        }
    };

    const [rentalDay, setRentalDay] = useState(7);
    const [rentalNumber, setRentalNumber] = useState(1);

    const decreaseRentalDay = () => {
        if (rentalDay > 0) {
            setRentalDay(rentalDay - 7);
        }
    };

    const increaseRentalDay = () => {
        if (rentalDay < 28) {
            setRentalDay(rentalDay + 7);
        }
    };

    const decreaseRentalNumber = () => {
        if (rentalNumber > 0) {
            setRentalNumber(rentalNumber - 1);
        }
    };

    const increaseRentalNumber = () => {
        if (rentalNumber < 100) {
            setRentalNumber(rentalNumber + 1);
        }
    };

    useEffect(() => {
        if (showForm) {
            const totalPrice = calculateTotalPrice(rentalNumber, rentalDay);

            const totalPriceBox = document.getElementById('totalPriceBox');
            if (totalPriceBox) {
                totalPriceBox.value = `${totalPrice} 원`;
            }
        }
    }, [rentalNumber, rentalDay, showForm]);

    return (
        <div class="productDetail">
            <nav id="productDetailNav">
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

            <div class="productDetailBody">
                <div class="productDetailBodyAll">
                    <button id="backButton"><Link to="/product"><img src={icon_back} id="icon_back"/>&nbsp;뒤로</Link></button>

                    <div class="productDetailContainer">
                        <img src={product} id="productDetailImage"/>
                        <div class="productDeatilExplain">
                            <div class="productDetailPContainer">
                                <p id="productDetailTitle">애플 에어팟 맥스1</p>
                                <p id="productDetailText">하이파이 오디오와 업계최고 수준의 액티브 노이즈 캔슬링, 적응형 EQ, 공간 음향 기능을 갖췄습니다.</p>
                            </div>
                            <div class="productDetailBottom">
                                <div class="productDetailNumber">30개 남음</div>
                                <img
                                    src={isLiked9 ? white_lbold_heart : white_line_heart}
                                    id="white_line_heart"
                                    alt="white_line_heart"
                                    onClick={handleHeartClick9}
                                />
                            </div>
                        </div>
                    </div>

                    <p id="priceTitle">대여 비용</p>
                    <div class="priceBox">
                        <div class="weekBox">
                            <p id="productweekTtile">7일 기준</p>
                            <p id="productweekPrice">39,000원</p>
                        </div>
                        <div class="monthBox">
                            <p id="productmonthTitle">1달 기준</p>
                            <p id="productmonthPrice">120,000원</p>
                        </div>
                    </div>

                    <p id="cautionTitle">사용시 주의사항</p>
                    <div class="cautionBox">
                        <div class="caution1">
                            <div class="caution1All">
                                <div class="caution1TitleBox">
                                    <img src={icon_clock} id="icon_clock"/>
                                    <p id="caution1Title">시간 엄수</p>
                                </div>
                                <p id="cautionExplain">렌탈 일정을 반드시 지켜주시고 부득이하게 일정을 변경해야 하는 상황에는 미리 연락해주세요.</p>
                            </div>
                        </div>
                        <div class="caution2">
                            <div class="caution2All">
                                <div class="caution1TitleBox">
                                    <img src={icon_broken} id="icon_broken" />
                                    <p id="caution2Title">파손 및 분실주의</p>
                                </div>
                                <p id="cautionExplain">소중한 제품을 조심해서 사용해주세요. 렌탈 전, 후로 제품에 이상이 있는지 잘 확인해주시고 해당 내용을 꼭 담당자에게 알려주세요. 영상이나 사진으로 제품 상태를 체크해두는 것이 도움이 될거예요!</p>
                            </div>
                        </div>
                        <div class="caution3">
                            <div class="caution3All">
                                <div class="caution3TitleBox">
                                    <img src={icon_warning} id="icon_warning" />
                                    <p id="caution3Title">기타 주의사항</p>
                                </div>
                                <p id="cautionExplain">
                                    대여 신청인 외에 다른 사람이 대신 사용하지 않도록 해주세요.<br/>
                                    문제가 생기거나 문의사항이 생길 시, 언제든지 문의주세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <form>
                {showForm && (
                    <div class="rentalShow" style={{ zIndex: 1, position: 'absolute' }}>
                        <div class="rentalShowContainer">
                            <div class="rentalShowTop">
                                <div class="rentalDayBox">
                                    <p id="rentalDayTitle">대여 일수</p>
                                    <img src={button_minus} id="button_minus1" onClick={decreaseRentalDay} />
                                    <input type="text" value={`${rentalDay} 일`} id="rentalDay"/>
                                    <img src={button_plus} id="button_plus1" onClick={increaseRentalDay} />
                                </div>
                                <div class="rentalNumberBox">
                                    <p id="rentalNumberTitle">수량 선택</p>
                                    <img src={button_minus} id="button_minus2" onClick={decreaseRentalNumber} />
                                    <input type="text" value={`${rentalNumber} 개`} id="rentalNumber" />
                                    <img src={button_plus} id="button_plus2" onClick={increaseRentalNumber} />
                                </div>
                            </div>
                            <div class="rentalShowBottom">
                                <p id="totalPriceTitle">총 금액</p>
                                <input type="text" id="totalPriceBox" readOnly></input>
                            </div>
                        </div>
                    </div>
                )}
            </form>

            <footer id="ProductDetailFooter" style={{ marginTop, zIndex:2, position:'absolute' }}>
                <div className="footerContainer">
                    {showCartButton && (
                        <button id="cartBtn">장바구니 추가</button>
                    )}
                    <button id="rentalOrderBtn" onClick={handleRentButtonClick}>
                        {rentButtonText}
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default ProductDetail;

function calculateTotalPrice(quantity, days) {
    const pricePerDay = 39000/7;
    const pricePerMonth = 120000;

    const totalPrice = (days <= 21) ? (quantity * pricePerDay * days) : (quantity * pricePerMonth);
    return totalPrice;
}