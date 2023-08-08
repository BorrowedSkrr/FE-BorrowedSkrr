import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import icon_back from "../images/icon-back.png";
import product from "../images/product.png";
import white_line_heart from "../images/white-line-heart.png";
import icon_clock from "../images/icon-clock.png";
import icon_broken from "../images/icon-broken.png";
import icon_warning from "../images/icon-warning.png";
import white_lbold_heart from "../images/white-lbold-heart.png";

function ProductDetail() {
    const [isLiked9, setIsLiked9] = useState(false);
    const handleHeartClick9 = () => {
        setIsLiked9(!isLiked9);
    };

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

            <footer id="ProductDetailFooter">
                <div class="footerContainer">
                    <button id="rentalOrderBtn">대여하기</button>
                </div>
            </footer>
        </div>
    )
}

export default ProductDetail
