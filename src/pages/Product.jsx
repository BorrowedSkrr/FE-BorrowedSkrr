import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import button_left from "../images/button-left.png";
import button_right from "../images/button-right.png";
import icon_sort from "../images/icon-sort.png";
import productImage from "../images/product.png";
import icon_line_heart from "../images/icon-line-heart.png";
import icon_lbold_heart from "../images/icon-lbold-heart.png";
import button_more from "../images/button-more.png";
import likelion from "../images/likelion.png";
import icon_search from "../images/icon-search.png";
import notcheck_radio from "../images/notcheck-radio.png";
import yescheck_radio from "../images/yescheck-radio.png";

function Product() {
    const [activeButton, setActiveButton] = useState("notebook");
    const [selectedOption, setSelectedOption] = useState('기본');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [clickStatus, setClickStatus] = useState({
        '기본': true,
        '인기순': false,
        '저가순': false,
        '고가순': false,
    });

    //관심상품 버튼
    const [isLiked1] = useState(false);
    const [isLiked2] = useState(false);
    const [isLiked3] = useState(false);
    const [isLiked4] = useState(false);
    const [isLiked5] = useState(false);
    const [isLiked6] = useState(false);
    const [isLiked7] = useState(false);
    const [isLiked8] = useState(false);

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

    const [productData, setProductData] = useState([
        {
            id: 1,
            name: '애플 에어팟 맥스1',
            isLiked: isLiked1,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 30,
        },
        {
            id: 3,
            name: '애플 에어팟 맥스3',
            isLiked: isLiked3,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 0,
        },
        {
            id: 5,
            name: '애플 에어팟 맥스5',
            isLiked: isLiked5,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 0,
        },
        {
            id: 7,
            name: '애플 에어팟 맥스7',
            isLiked: isLiked7,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 30,
        }
    ]);

    const [productData2, setProductData2] = useState([
        {
            id: 2,
            name: '애플 에어팟 맥스2',
            isLiked: isLiked2,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 20,
        },
        {
            id: 4,
            name: '애플 에어팟 맥스4',
            isLiked: isLiked4,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 0,
        },
        {
            id: 6,
            name: '애플 에어팟 맥스6',
            isLiked: isLiked6,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 5,
        },
        {
            id: 8,
            name: '애플 에어팟 맥스8',
            isLiked: isLiked8,
            weekPrice: '39,000원',
            monthPrice: '120,000원',
            remaining: 50,
        }
    ]);

    const [likedStatus, setLikedStatus] = useState([
        isLiked1, isLiked2, isLiked3, isLiked4,
        isLiked5, isLiked6, isLiked7, isLiked8
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [searchText, setSearchText] = useState('');

    const dropdownRef = useRef(null);

    const handleButtonClicked = (buttonId) => {
        setActiveButton(buttonId);
    };

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

    const handleSlideChange = (direction) => {
        let newIndex = currentSlide + direction;

        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }

        setCurrentSlide(newIndex);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        console.log('검색 내용:', searchText);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const images = [
        productImage,
        icon_line_heart,
        icon_lbold_heart
    ];

    useEffect(() => {
        const autoSlideTimer = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                let newIndex = prevSlide + 1;

                if (newIndex >= images.length) {
                    newIndex = 0;
                }

                return newIndex;
            });
        }, 3000);

        return () => {
            clearInterval(autoSlideTimer);
        };
    }, [images.length]);


    return (
        <div className="Product">
            <nav id="ProductNav">
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

            <div class="ProductBody">
                <div className="ProductBanner">
                    <img src={button_left} id="button_left" onClick={() => handleSlideChange(-1)} alt="button_left" />
                    <div className="slides">
                        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} id="productImage" />
                    </div>
                    <img src={button_right} id="button_right" onClick={() => handleSlideChange(1)} alt="button_right" />
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
                    <img src={icon_search} id="icon_search" alt="icon_search" />
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
                    <div className="left">
                        {productData.map((product) => (
                            <div
                                className={`product${product.id}`}
                                style={{ opacity: product.remaining === 0 ? 0.4 : 1 }}
                            >
                                <img src={productImage} id="productImage" alt="productImage" />
                                <div className="productExplain">
                                    <div className="topTitle">
                                        <Link to="/productDetail">
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
                                    <div className="bottomTitle">
                                        <div className="weekTitle">
                                            <p id="p12">7일 기준</p>
                                            <p id="p13">{product.weekPrice}</p>
                                        </div>
                                        <div className="monthTitle">
                                            <p id="p12">1달 기준</p>
                                            <p id="p13">{product.monthPrice}</p>
                                        </div>
                                        <div className="number">{product.remaining}개 남음</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="right">
                        {productData2.map((product) => (
                            <div
                                className={`product${product.id}`}
                                style={{ opacity: product.remaining === 0 ? 0.4 : 1 }}
                            >
                                <img src={productImage} id="productImage" alt="productImage" />
                                <div className="productExplain">
                                    <div className="topTitle">
                                        <Link to="/productDetail">
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
                                    <div className="bottomTitle">
                                        <div className="weekTitle">
                                            <p id="p12">7일 기준</p>
                                            <p id="p13">{product.weekPrice}</p>
                                        </div>
                                        <div className="monthTitle">
                                            <p id="p12">1달 기준</p>
                                            <p id="p13">{product.monthPrice}</p>
                                        </div>
                                        <div className="number">{product.remaining}개 남음</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div class="addView">
                    <p id="p14">더보기</p>
                    <img src={button_more} id="button_more" alt="button_more" />
                </div>

            </div>

            <footer id="ProductFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default Product;
