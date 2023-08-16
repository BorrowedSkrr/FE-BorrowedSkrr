import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import profile_teacher from "../images/profile-teacher.png";
import white_line_heartHome from "../images/white-line-heart.png";
import icon_moneyHome from "../images/icon-money.png";
import likelion from "../images/likelion.png";
import icon_line_heart from "../images/icon-line-heart.png";
import icon_lbold_heart from "../images/icon-lbold-heart.png";
import productImage from "../images/product.png";

function StudentHome() {
    const [activeButton, setActiveButton] = useState("notebook");
    const handleButtonClicked = (buttonId) => {
        setActiveButton(buttonId);
    };

    //관심상품 버튼
    const [isLiked1] = useState(false);
    const [isLiked2] = useState(false);
    const [isLiked3] = useState(false);
    const [isLiked4] = useState(false);
    const [isLiked5] = useState(false);
    const [isLiked6] = useState(false);
    const [isLiked7] = useState(false);
    const [isLiked8] = useState(false);

    const [likedStatus, setLikedStatus] = useState([
        isLiked1, isLiked2, isLiked3, isLiked4,
        isLiked5, isLiked6, isLiked7, isLiked8
    ]);

    const handleHeartClick = (productId) => {
        const updatedLikedState = [...likedStatus];
        updatedLikedState[productId - 1] = !updatedLikedState[productId - 1];
        setLikedStatus(updatedLikedState);
        const updatedProductData = productData.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    isLiked: !product.isLiked,
                };
            }
            return product;
        });

        setProductData(updatedProductData);

        const updatedProductData2 = productData2.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    isLiked: !product.isLiked,
                };
            }
            return product;
        });
        setProductData2(updatedProductData2);
    };

    //왼쪽 줄 상품 데이터
    const [productData, setProductData] = useState([
        {
            id: 1,
            name: '애플 에어팟 맥스1',
            isLiked: isLiked1,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 30,
        },
        {
            id: 3,
            name: '애플 에어팟 맥스3',
            isLiked: isLiked3,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 0,
        },
        {
            id: 5,
            name: '애플 에어팟 맥스5',
            isLiked: isLiked5,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 0,
        },
        {
            id: 7,
            name: '애플 에어팟 맥스7',
            isLiked: isLiked7,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 30,
        }
    ]);

    //오른쪽 줄 상품 데이터
    const [productData2, setProductData2] = useState([
        {
            id: 2,
            name: '애플 에어팟 맥스2',
            isLiked: isLiked2,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 20,
        },
        {
            id: 4,
            name: '애플 에어팟 맥스4',
            isLiked: isLiked4,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 0,
        },
        {
            id: 6,
            name: '애플 에어팟 맥스6',
            isLiked: isLiked6,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 5,
        },
        {
            id: 8,
            name: '애플 에어팟 맥스8',
            isLiked: isLiked8,
            endDay: '~ 2023. 08. 06. 까지 사용가능',
            remaining: 50,
        }
    ]);

    return (
        <div className="StudentHome">
            <nav id="StudentHomeNav">
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

            <div class="StudentHomeBody">
                <div class="StudentHomeBox">
                    <div class="StudentHomeleft">
                        <img src={profile_teacher} alt="profile_teacher" id="profile_teacher"/>
                        <div class="StudentHomePContainer">
                            <p id="StudentProfile">스컬고등학교 1학년 2반</p>
                            <div class="StudentHomePContainer2">
                                <p id="StudentHomeName">김스컬</p>
                                <p id="StudentHomeTitle">학생</p>
                            </div>
                        </div>
                    </div>
                    <div class="StudentHomeBtnContainer">
                        <button id="StudentHomeBtn1">정보수정</button>
                        <button id="StudentHomeBtn2">로그아웃</button>
                    </div>
                </div>
                <div class="StudentHomeBtnContainer2">
                    <button id="StudentHomeBtn3">
                        <img src={white_line_heartHome} alt="white_line_heartHome" id="white_line_heartHome"/>
                        <p id="StudentHomeBtnP1">관심목록</p>
                    </button>
                    <button id="StudentHomeBtn4">
                        <img src={icon_moneyHome} alt="icon_moneyHome" id="icon_moneyHome"/>
                        <p id="StudentHomeBtnP2">대여 내역</p>
                    </button>
                </div>

                <p id="StudentHomeP">우리 학교 대여 현황</p>
                
                <div class="menuBar2">
                    <button
                        id="notebook"
                        class={activeButton === "notebook" ? "activeButton" : ""}
                        onClick={() => handleButtonClicked("notebook")}
                    >
                        💻 노트북/스마트기어
                    </button>
                    <button
                        id="sound"
                        class={activeButton === "sound" ? "activeButton" : ""}
                        onClick={() => handleButtonClicked("sound")}
                    >
                        🎧 사운드
                    </button>
                    <button
                        id="camera"
                        class={activeButton === "camera" ? "activeButton" : ""}
                        onClick={() => handleButtonClicked("camera")}
                    >
                        📸 카메라/촬영
                    </button>
                    <button
                        id="game"
                        class={activeButton === "game" ? "activeButton" : ""}
                        onClick={() => handleButtonClicked("game")}
                    >
                        🎮 게임/VR
                    </button>
                </div>
                <p id="StudentHomeP3" style={{ display: productData.length === 0 && productData2.length === 0 ? 'block' : 'none'}}>아직 대여 현황이 없습니다</p>

                {productData.length > 0 || productData2.length > 0 ? (
                    <div class="StudentHomeList">
                        <div className="StudentHomeleft2">
                            {productData.map((product) => (
                                <div
                                    className={`product${product.id}`}
                                    style={{ opacity: product.remaining === 0 ? 0.4 : 1 }}
                                >
                                    <img src={productImage} id="productImage" alt="productImage" />
                                    <div className="productExplain2">
                                        <div className="topTitle">
                                            <Link to="/StudentProduct">
                                                <p id="productTitle">{product.name}</p>
                                            </Link>
                                            <img
                                                src={product.isLiked ? icon_lbold_heart : icon_line_heart}
                                                id="icon_line_heart"
                                                alt="icon_line_heart"
                                                onClick={() => handleHeartClick(product.id)}
                                            />
                                        </div>
                                        <div className="bar"></div>
                                        <div className="bottomTitle2">
                                            <p id="endDayTitle">{product.endDay}</p>
                                            <div className="number2">{product.remaining}개 남음</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="StudentHomeright">
                            {productData2.map((product) => (
                                <div
                                    className={`product${product.id}`}
                                    style={{ opacity: product.remaining === 0 ? 0.4 : 1 }}
                                >
                                    <img src={productImage} id="productImage" alt="productImage" />
                                    <div className="productExplain2">
                                        <div className="topTitle">
                                            <Link to="/StudentProduct">
                                                <p id="productTitle">{product.name}</p>
                                            </Link>
                                            <img
                                                src={product.isLiked ? icon_lbold_heart : icon_line_heart}
                                                id="icon_line_heart"
                                                alt="icon_line_heart"
                                                onClick={() => handleHeartClick(product.id)}
                                            />
                                        </div>
                                        <div className="bar"></div>
                                        <div className="bottomTitle2">
                                            <p id="endDayTitle">{product.endDay}</p>
                                            <div className="number2">{product.remaining}개 남음</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>

            <footer id="StudentHomeFooter" style={{ marginTop: productData.length === 0 && productData2.length === 0 ? '10vw' : '5vw' }}>
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default StudentHome
