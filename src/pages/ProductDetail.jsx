import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import productData from '../util/product';

function ProductDetail() {
    let {id} = useParams();
    // let findItem = shoes.find((item) => {
    //     return item.id == id;
    // });

    // {img, name, info, num, price7, price30}
    const productItem = productData.find((item) => {
        return item.id == id;
    })

    const [marginTop, setMarginTop] = useState('8.65vw');
    const [isLiked9, setIsLiked9] = useState(false);
    const [rentButtonText, setRentButtonText] = useState('대여하기');
    const [showCartButton, setShowCartButton] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [redirectToCheckout, setRedirectToCheckout] = useState(false);
    const navigate = useNavigate();

    //관심상품 버튼
    const handleHeartClick9 = () => {
        setIsLiked9(!isLiked9);
    };

    // 대여하기 버튼 -> 결제하기 버튼, 결제하기 버튼일때, 대여일수가 7일 이상이어야 페이지 넘어감
    const handleRentButtonClick = () => {
        if (rentButtonText === '대여하기') {
            setRentButtonText('결제하기');
            setShowCartButton(true);
            setShowForm(true);
            setMarginTop('-1.5vw');
        } else if (rentButtonText === '결제하기') {
            if (isNaN(rentalDay) || rentalDay < 7) {
                console.log('대여 일수가 7일 이상이어야 합니다.');
            } else {
                const endDate = getEndDate(rentalDay); 
                const totalPrice = calculateTotalPrice(rentalNumber, rentalDay);
                console.log(`대여 시작일: ${getCurrentDate()}`);
                console.log(`대여 종료일: ${endDate}`);
                console.log(`대여 개수: ${rentalNumber}개`);
                console.log(`총 금액: ${totalPrice} 원`);
                setRedirectToCheckout(true);
            }
        }
    };

    // 대여 시작일
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    // 대여 종료일
    const getEndDate = (days) => {
        if (isNaN(days) || days < 7) {
            return "일";
        }

        const today = new Date();
        const endDate = new Date(today);
        endDate.setDate(today.getDate() + parseInt(days, 10));

        const year = endDate.getFullYear();
        const month = String(endDate.getMonth() + 1).padStart(2, '0');
        const day = String(endDate.getDate()).padStart(2, '0');

        return `${year}.${month}.${day}`;
    };

    //대여일수, 수량 증가 감소 버튼
    const [rentalDay, setRentalDay] = useState(7);
    const [rentalNumber, setRentalNumber] = useState(1);

    const decreaseRentalDay = () => {
        if (rentalDay > 7) {
            setRentalDay(rentalDay - 7);
        }
    };

    const increaseRentalDay = () => {
        const currentValue = parseInt(rentalDay, 10);
        const adjustedRentalDay = currentValue + 7;
        setRentalDay(adjustedRentalDay);
    };

    const decreaseRentalNumber = () => {
        if (rentalNumber > 1) {
            setRentalNumber(rentalNumber - 1);
        }
    };

    //이거 수량 남은거에 맞춰서 최대 조정해줘야 합니다.
    const increaseRentalNumber = () => {
        const currentValue = parseInt(rentalNumber, 10);
        if (currentValue < productItem.num) {
            setRentalNumber(currentValue + 1);
        }
    };

    //이것도 가격에 맞춰서 바꿔주셔야합니다.
    function calculateTotalPrice(quantity, days) {
        const pricePerDay = productItem.price7 / 7;
        const pricePerMonth = productItem.price30;

        if (days % 28 === 0) {
            const totalMonths = days / 28;
            const totalPrice = quantity * pricePerMonth * totalMonths;
            return Math.floor(totalPrice).toLocaleString('en-US');
        } else {
            const totalPrice = quantity * pricePerDay * days;
            return Math.floor(totalPrice).toLocaleString('en-US');
        }
    }

    // 총금액 출력
    useEffect(() => {
        if (showForm) {
            const rentalDayInput = document.getElementById('rentalDay');
            if (rentalDayInput) {
                if (isNaN(rentalDay) || rentalDay === "") {
                    rentalDayInput.value = "일";
                } else {
                    rentalDayInput.value = `${rentalDay}일`;
                }

                const endDate = getEndDate(rentalDay);
                const endDateBox = document.getElementById('endDateBox');
                if (endDateBox) {
                    endDateBox.value = endDate;
                }
            }

            if (isNaN(rentalDay) || rentalDay < 7) {
                const totalPriceBox = document.getElementById('totalPriceBox');
                if (totalPriceBox) {
                    totalPriceBox.value = "7일 미만입니다 :(";
                    totalPriceBox.style.color = "#FF5D47";
                }
            } else {
                const totalPrice = calculateTotalPrice(rentalNumber, rentalDay);
                const totalPriceBox = document.getElementById('totalPriceBox');
                if (totalPriceBox) {
                    totalPriceBox.value = `${totalPrice} 원`;
                    totalPriceBox.style.color = "#FFFFFF";
                }
            }
        }
    }, [showForm, rentalNumber, rentalDay]);

    useEffect(() => {
        if (redirectToCheckout) {
            navigate(`/credit/${id}`);
        }
    }, [redirectToCheckout, navigate]);

    return (
        <div class="productDetail">
            {/* <nav id="productDetailNav">
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

            <div className="productDetailBody">
                <div className="productDetailBodyAll">
                    <Link to="/product" id="Link1">
                    <button id="backButton">
                        <img src={icon_back} id="icon_back2" alt="icon_back"/>
                        <p id="backBtnTitle">뒤로</p>
                    </button>
                    </Link>

                    <div className="productDetailContainer">
                        <img src={product} id="productDetailImage" alt="productDetailImage"/>
                        <div className="productDeatilExplain">
                            <div className="productDetailPContainer">
                                <p id="productDetailTitle">{productItem.name}</p>
                                <p id="productDetailText">{productItem.info}</p>
                            </div>
                            <div className="productDetailBottom">
                                <div className="productDetailNumber">{productItem.num}개 남음</div>
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
                    <div className="priceBox">
                        <div className="weekBox">
                            <p id="productweekTtile">7일 기준</p>
                            <p id="productweekPrice">{productItem.price7}원</p>
                        </div>
                        <div className="monthBox">
                            <p id="productmonthTitle">1달 기준</p>
                            <p id="productmonthPrice">{productItem.price30}</p>
                        </div>
                    </div>

                    <p id="cautionTitle">사용시 주의사항</p>
                    <div className="cautionBox">
                        <div className="caution1">
                            <div className="caution1All">
                                <div className="caution1TitleBox">
                                    <img src={icon_clock} id="icon_clock" alt="icon_clock"/>
                                    <p id="caution1Title">시간 엄수</p>
                                </div>
                                <p id="cautionExplain">렌탈 일정을 반드시 지켜주시고 부득이하게 일정을 변경해야 하는 상황에는 미리 연락해주세요.</p>
                            </div>
                        </div>
                        <div className="caution2">
                            <div className="caution2All">
                                <div className="caution1TitleBox">
                                    <img src={icon_broken} id="icon_broken" alt ="icon_broken"/>
                                    <p id="caution2Title">파손 및 분실주의</p>
                                </div>
                                <p id="cautionExplain">소중한 제품을 조심해서 사용해주세요. 렌탈 전, 후로 제품에 이상이 있는지 잘 확인해주시고 해당 내용을 꼭 담당자에게 알려주세요. 영상이나 사진으로 제품 상태를 체크해두는 것이 도움이 될거예요!</p>
                            </div>
                        </div>
                        <div className="caution3">
                            <div className="caution3All">
                                <div className="caution3TitleBox">
                                    <img src={icon_warning} id="icon_warning" alt="icon_warning"/>
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
                    <div className="rentalShow" style={{ zIndex: 1 }}>
                        <div className="rentalShowContainer">
                            <div className="rentalShowTop">
                                <div className="rentalDayBox">
                                    <p id="rentalDayTitle">대여 일수</p>
                                    <img src={button_minus} id="button_minus1" onClick={decreaseRentalDay} alt="button_minus" />
                                    <div className="inputWithUnit">
                                        <input
                                            type="text"
                                            value={`${rentalDay}일`}
                                            onChange={(e) => {
                                                const newValue = e.target.value.replace(/[^0-9]/g, '');
                                                setRentalDay(newValue);

                                                const endDate = getEndDate(parseInt(newValue, 10));
                                                const totalPrice = calculateTotalPrice(rentalNumber, parseInt(newValue, 10));

                                                const endDateBox = document.getElementById('endDateBox');
                                                const totalPriceBox = document.getElementById('totalPriceBox');
                                                if (endDateBox) {
                                                    endDateBox.value = endDate;
                                                }
                                                if (totalPriceBox) {
                                                    if (isNaN(newValue) || parseInt(newValue, 10) < 7) {
                                                        totalPriceBox.value = "7일 미만입니다 :(";
                                                        totalPriceBox.style.color = "#FF5D47";
                                                    } else {
                                                        totalPriceBox.value = `${totalPrice} 원`;
                                                        totalPriceBox.style.color = "#FFFFFF";
                                                    }
                                                }
                                            }}
                                            id="rentalDay"
                                        />

                                    </div>
                                    <img src={button_plus} id="button_plus1" onClick={increaseRentalDay} alt="button_plus" />
                                </div>
                                <div className="rentalNumberBox">
                                    <p id="rentalNumberTitle">수량 선택</p>
                                    <img src={button_minus} id="button_minus2" onClick={decreaseRentalNumber} alt="button_minus" />
                                    <div className="inputWithUnit">
                                        <input
                                            type="text"
                                            value={`${rentalNumber}개`}
                                            onChange={(e) => setRentalNumber(e.target.value.replace(/[^0-9]/g, ''))}
                                            id="rentalNumber"
                                        />
                                    </div>
                                    <img src={button_plus} id="button_plus2" onClick={increaseRentalNumber} alt="button_plus" />
                                </div>
                            </div>
                            <div className="rentalShowBottom">
                                <p id="totalPriceTitle">총 금액</p>
                                <input type="text" value={`${calculateTotalPrice()} 원`} id="totalPriceBox" readOnly />
                            </div>
                        </div>
                    </div>
                )}
            </form>
            
            <div id="ProductDetailFooter" style={{ marginTop, zIndex:2}}>
                <div className="footerContainer">
                    {showCartButton && (
                        <button id="cartBtn">장바구니 추가</button>
                    )}
                    <button id="rentalOrderBtn" onClick={handleRentButtonClick}>
                        {rentButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;