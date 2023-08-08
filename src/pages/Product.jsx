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

function Product() {
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
                <div class="ProductBanner">
                    <img src={button_left} id="button_left"/>
                    <div class="slides">배너 미완성</div>
                    <img src={button_right} id="button_right"/>
                </div>
                <div class="BannerButton">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                </div>

                <p id="ProductTitle">테크 제품</p>
                <div className="sortContainer">
                    <form>
                        <div className="customSelectContainer">
                            <img src={icon_sort} alt="Sort Icon" className="sortIcon" />
                            <select name="sortType" className="customSelect">
                                <option value="기본" defaultValue>기본</option>
                                <option value="인기순">인기순</option>
                                <option value="저가순">저가순</option>
                                <option value="고가순">고가순</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div class="menuBar">
                    <button id="notebook">💻 노트북/스마트기어</button>
                    <button id="sound">🎧 사운드</button>
                    <button id="camera">📸 카메라/촬영</button>
                    <button id="game">🎮 게임/VR</button>
                </div>

                <div class="productList">
                    <div class="left">
                        <Link to="/productDetail">
                        <div class="product1">
                            <img src={product} id="productImage"/>
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스1</p>
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
                        </Link>
                        <div class="product3">
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스3</p>
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
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스5</p>
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
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스7</p>
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
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스2</p>
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
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스4</p>
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
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스6</p>
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
                            <img src={product} id="productImage" />
                            <div class="productExplain">
                                <div class="topTitle">
                                    <p id="productTitle">애플 에어팟 맥스8</p>
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
                    <img src={button_more} id="button_more"/>
                </div>
            </div>

            <footer id="ProductFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default Product
