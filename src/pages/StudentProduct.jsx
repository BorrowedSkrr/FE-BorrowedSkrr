import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import icon_back from "../images/icon-back.png";
import product from "../images/product.png";
import white_line_heart from "../images/white-line-heart.png";
import white_lbold_heart from "../images/white-lbold-heart.png";
import icon_clock from "../images/icon-clock.png";
import icon_broken from "../images/icon-broken.png";
import icon_warning from "../images/icon-warning.png";
import button_minus from "../images/button-minus.png";
import button_plus from "../images/button-plus.png";

function StudentProduct() {
    const [isLiked10, setIsLiked10] = useState(false);
    const [marginTop, setMarginTop] = useState('3.65vw');
    const [rentButtonText, setRentButtonText] = useState('대여하기');
    const [showForm, setShowForm] = useState(false);
    const [redirectToCheckout, setRedirectToCheckout] = useState(false);
    const navigate = useNavigate();
    const [rentalNumber2, setRentalNumber2] = useState(1);


    //관심상품 버튼
    const handleHeartClick10 = () => {
        setIsLiked10(!isLiked10);
    };

    const handleRentButtonClick = () => {
        if (rentButtonText === '대여하기') {
            setRentButtonText('대여신청');
            setShowForm(true);
            setMarginTop('3.5vw');
        } else if (rentButtonText === '대여신청') {
            if (isNaN(rentalNumber2) || rentalNumber2 < 1) {
                console.log('대여 개수가 1개 이상이어야 합니다.');
            } else {
                console.log(`대여 개수: ${rentalNumber2}개`);
                setRedirectToCheckout(true);
            }
        }
    };

    const decreaseRentalNumber = () => {
        if (rentalNumber2 > 1) {
            setRentalNumber2(rentalNumber2 - 1);
        }
    };

    //이거 수량 남은거에 맞춰서 최대 조정해줘야 합니다.
    const increaseRentalNumber = () => {
        const currentValue = parseInt(rentalNumber2, 10);
        if (currentValue < 100) {
            setRentalNumber2(currentValue + 1);
        }
    };

    useEffect(() => {
        if (redirectToCheckout) {
            navigate('/studentRental');
        }
    }, [redirectToCheckout, navigate]);

    return (
        <div className="StudentProduct">
            <nav id="StudentProductNav">
                <div className="logo-small">
                    <Link to="/">
                        <img src={logo_small} alt="logo_small" id="logo_small" />
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login">MY PAGE</button>
                </div>
            </nav>

            <div className="StudentProductBody">
                <div className="StudentProductBodyAll">
                    <button id="backButton"><Link to="/studentHome"><img src={icon_back} id="icon_back" alt="icon_back" />&nbsp;뒤로</Link></button>

                    <div className="StudentProductContainer">
                        <img src={product} id="StudentProductImage" alt="StudentProductImage" />
                        <div className="StudentProductExplain">
                            <div className="StudentProductPContainer">
                                <p id="StudentProductTitle">애플 에어팟 맥스1</p>
                                <p id="StudentProductText">하이파이 오디오와 업계최고 수준의 액티브 노이즈 캔슬링, 적응형 EQ, 공간 음향 기능을 갖췄습니다.</p>
                            </div>
                            <div className="StudentProductBottom">
                                <div className="StudentProductNumber">30개 남음</div>
                                <img
                                    src={isLiked10 ? white_lbold_heart : white_line_heart}
                                    id="white_line_heart"
                                    alt="white_line_heart"
                                    onClick={handleHeartClick10}
                                />
                            </div>
                        </div>
                    </div>

                    <p id="StdProductTitle1">사용 가능 기간</p>
                    <p id="StdProductTitle2">~ 2023. 08. 06. 까지 사용가능</p>

                    <p id="cautionTitle2">사용시 주의사항</p>
                    <div className="cautionBox2">
                        <div className="caution1">
                            <div className="caution1All">
                                <div className="caution1TitleBox">
                                    <img src={icon_clock} id="icon_clock" alt="icon_clock" />
                                    <p id="caution1Title">시간 엄수</p>
                                </div>
                                <p id="cautionExplain">렌탈 일정을 반드시 지켜주시고 부득이하게 일정을 변경해야 하는 상황에는 미리 연락해주세요.</p>
                            </div>
                        </div>
                        <div className="caution2">
                            <div className="caution2All">
                                <div className="caution1TitleBox">
                                    <img src={icon_broken} id="icon_broken" alt="icon_broken" />
                                    <p id="caution2Title">파손 및 분실주의</p>
                                </div>
                                <p id="cautionExplain">소중한 제품을 조심해서 사용해주세요. 렌탈 전, 후로 제품에 이상이 있는지 잘 확인해주시고 해당 내용을 꼭 담당자에게 알려주세요. 영상이나 사진으로 제품 상태를 체크해두는 것이 도움이 될거예요!</p>
                            </div>
                        </div>
                        <div className="caution3">
                            <div className="caution3All">
                                <div className="caution3TitleBox">
                                    <img src={icon_warning} id="icon_warning" alt="icon_warning" />
                                    <p id="caution3Title">기타 주의사항</p>
                                </div>
                                <p id="cautionExplain">
                                    대여 신청인 외에 다른 사람이 대신 사용하지 않도록 해주세요.<br />
                                    문제가 생기거나 문의사항이 생길 시에 담당자에게 연락하세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form>
                {showForm && (
                    <div className="rentalShow2" style={{ zIndex: 1, position: 'absolute' }}>
                        <div className="rentalShowContainer2">
                            <div className="rentalNumberBox">
                                <p id="rentalNumberTitle">수량 선택</p>
                                <img src={button_minus} id="button_minus2" onClick={decreaseRentalNumber} alt="button_minus" />
                                <div className="inputWithUnit">
                                    <input
                                        type="text"
                                        value={`${rentalNumber2}개`}
                                        onChange={(e) => setRentalNumber2(e.target.value.replace(/[^0-9]/g, ''))}
                                        id="rentalNumber2"
                                    />
                                </div>
                                <img src={button_plus} id="button_plus2" onClick={increaseRentalNumber} alt="button_plus" />
                            </div>
                        </div>
                    </div>
                )}
            </form>

            <footer id="StudentProductFooter" style={{ marginTop, zIndex: 2, position: 'absolute' }}>
                <div className="footerContainer">
                    <button id="rentalOrderBtn" onClick={handleRentButtonClick}>
                        {rentButtonText}
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default StudentProduct
