import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import button_left from "../images/button-left.png";
import button_right from "../images/button-right.png";
import icon_sort from "../images/icon-sort.png";
import product from "../images/product.png";
import icon_line_heart from "../images/icon-line-heart.png";
import icon_lbold_heart from "../images/icon-lbold-heart.png";
import button_more from "../images/button-more.png";
import likelion from "../images/likelion.png";
import icon_search from "../images/icon-search.png";
import notcheck_radio from "../images/notcheck-radio.png";
import yescheck_radio from "../images/yescheck-radio.png";

function Product() {
    //카테고리 버튼 색상 변경
    const [activeButton, setActiveButton] = useState("notebook");
    const handleButtonClicked = (buttonId) => {
        setActiveButton(buttonId);
    };

    //정렬
    const [selectedOption, setSelectedOption] = useState('기본');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [clickStatus, setClickStatus] = useState({
        '기본': true,
        '인기순': false,
        '저가순': false,
        '고가순': false,
    });

    const handleOptionClick = (option) => {
        setSelectedOption(option);

        const updatedClickStatus = {
            '기본': false,
            '인기순': false,
            '저가순': false,
            '고가순': false,
        };
        updatedClickStatus[option] = true;
        setClickStatus(updatedClickStatus);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    //관심상품 버튼
    const [isLiked1, setIsLiked1] = useState(false);
    const [isLiked2, setIsLiked2] = useState(false);
    const [isLiked3, setIsLiked3] = useState(false);
    const [isLiked4, setIsLiked4] = useState(false);
    const [isLiked5, setIsLiked5] = useState(false);
    const [isLiked6, setIsLiked6] = useState(false);
    const [isLiked7, setIsLiked7] = useState(false);
    const [isLiked8, setIsLiked8] = useState(false);

    const handleHeartClick1 = () => {
        setIsLiked1(!isLiked1);
    };
    const handleHeartClick2 = () => {
        setIsLiked2(!isLiked2);
    };
    const handleHeartClick3 = () => {
        setIsLiked3(!isLiked3);
    };
    const handleHeartClick4 = () => {
        setIsLiked4(!isLiked4);
    };
    const handleHeartClick5 = () => {
        setIsLiked5(!isLiked5);
    };
    const handleHeartClick6 = () => {
        setIsLiked6(!isLiked6);
    };
    const handleHeartClick7 = () => {
        setIsLiked7(!isLiked7);
    };
    const handleHeartClick8 = () => {
        setIsLiked8(!isLiked8);
    };


    // 배너
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (direction) => {
        let newIndex = currentSlide + direction;

        if (newIndex < 0) {
            newIndex = 2;
        } else if (newIndex > 2) {
            newIndex = 0;
        }

        setCurrentSlide(newIndex);
    };

    const images = [
        product,
        icon_line_heart,
        icon_lbold_heart
    ];
    
    //엔터 검색
    const [searchText, setSearchText] = useState('');
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        console.log('검색 내용:', searchText);
    };

    return (
        <div class="Product">
            <nav id="ProductNav">
                <div class="logo-small">
                    <Link to="/">
                    <img src={logo_small} alt="logo_small" id="logo_small"/>
                    </Link>
                </div>
                <div class="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login">MY PAGE</button>
                </div>
            </nav>

            <div class="ProductBody">
                <div className="ProductBanner">
                    <img src={button_left} id="button_left" onClick={() => handleSlideChange(-1)} alt="button_left"/>
                    <div className="slides">
                        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} id="productImage"/>
                    </div>
                    <img src={button_right} id="button_right" onClick={() => handleSlideChange(1)} alt="button_right"/>
                </div>
                <div className="BannerButton">
                    {[0, 1, 2].map((circleIndex) => (
                        <div
                            key={circleIndex}
                            className={`circle${circleIndex + 1} ${currentSlide === circleIndex ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentSlide(circleIndex);
                                if (circleIndex === 0) setCurrentSlide(0);
                                else if (circleIndex === 1) setCurrentSlide(1);
                                else if (circleIndex === 2) setCurrentSlide(2);
                            }}
                        />
                    ))}
                </div>

                <p id="ProductTitle">테크 제품</p>

                <div class="ProductsearhBox">
                    <input
                        type="search"
                        id="productSearch"
                        placeholder="제품명으로 검색해보세요"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <img src={icon_search} id="icon_search" alt="icon_search"/>
                </div>

                <div class="sortContainer">
                    <div class="sortSelect" onClick={toggleDropdown}>
                        <img src={icon_sort} alt="icon_sort" id="icon_sort" />
                        <p id="sortTitle">{selectedOption}</p>
                    </div>
                    {isDropdownVisible && (
                        <div class="dropdown-options" id="dropdown-options">
                            {['기본', '인기순', '저가순', '고가순'].map((option) => (
                                <div class="dropdown-option" key={option} onClick={() => handleOptionClick(option)}>
                                    <img src={clickStatus[option] ? yescheck_radio : notcheck_radio} alt="radio" id="notcheck_radio" />
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div class="menuBar">
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

                <div class="productList">
                    <div class="left">
                        <div class="product1">
                            <img src={product} id="productImage" alt="productImage"/>
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스1</p>
                                    </Link>
                                    <img
                                        src={isLiked1 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick1}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                        <div class="product3">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스3</p>
                                    </Link>
                                    <img
                                        src={isLiked3 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick3}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">0개 남음</div>
                                </div>
                            </div>
                        </div>
                        <div class="product5">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스5</p>
                                    </Link>
                                    <img
                                        src={isLiked5 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick5}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                        <div class="product7">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스7</p>
                                    </Link>
                                    <img
                                        src={isLiked7 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick7}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="product2">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스2</p>
                                    </Link>
                                    <img
                                        src={isLiked2 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick2}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                        <div class="product4">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스4</p>
                                    </Link>
                                    <img
                                        src={isLiked4 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick4}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                        <div class="product6">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스6</p>
                                    </Link>
                                    <img
                                        src={isLiked6 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick6}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                        <div class="product8">
                            <img src={product} id="productImage" alt="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <Link to="/productDetail">
                                    <p id="productTitle">애플 에어팟 맥스8</p>
                                    </Link>
                                    <img
                                        src={isLiked8 ? icon_lbold_heart : icon_line_heart}
                                        id="icon_line_heart"
                                        alt="icon_line_heart"
                                        onClick={handleHeartClick8}
                                    />
                                </div>
                                <div class="bar"></div>
                                <div class="bottomTitle">
                                    <div class="weekTitle">
                                        <p id="p12">7일 기준</p>
                                        <p id="p13">39,000원</p>
                                    </div>
                                    <div class="monthTitle">
                                        <p id="p12">1달 기준</p>
                                        <p id="p13">120,000원</p>
                                    </div>
                                    <div class="number">30개 남음</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="addView">
                    <p id="p14">더보기</p>
                    <img src={button_more} id="button_more" alt="button_more"/>
                </div>
            </div>

            <footer id="ProductFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default Product
