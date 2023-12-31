import React from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import logo_title from "../images/logo-title.png";
import home_banner from "../images/home-banner.png";
import icon_skrr_black from "../images/icon-skrr-black.png";
import school from "../images/school.png";
import icon_number1 from "../images/icon-number1.png";
import students from "../images/students.png";
import icon_number2 from "../images/icon-number2.png";
import icon_skrr_purple from "../images/icon-skrr-purple.png";
import likelion from "../images/likelion.png";
import advantage1 from "../images/advantage1.png";
import advantage2 from "../images/advantage2.png";
import advantage3 from "../images/advantage3.png";
import advantage4 from "../images/advantage4.png";
import week1 from "../images/1week.png";
import buy from "../images/buy.png";



function Home() {
    return (
        <div className="home">
            {/* <nav id="homeNav">
                <div class="logo-small">
                    <Link to="/">
                    <img src={logo_small} alt="logo_small" id="logo_small"/>
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login"><Link to="/loginStaff">LOGIN</Link></button>
                </div>
            </nav> */}

            <div className="homeBody">
                <div className="homeTitle">
                    <p id="homeTitleP">우리의 미래, 학생들을 위한 단 하나의 서비스</p>
                    <img src={logo_title} id="logo_title" alt="logo_title"/>
                </div>
                
                <div className="homeBanner">
                    <img src={home_banner} id="home_banner" alt="home_banner"/>
                    <div className="pContainer">
                        <div className="p2Container">
                            <p id="p1">빌렸스컬은 전국 각지의 학교를 대상으로</p>
                            <p id="p2">더 나은 교육환경을 제공하기 위한 테크제품 렌탈서비스입니다</p>
                            <p id="p3">사지말고, 대여하세요!</p>
                        </div>
                    </div>
                </div>

                <div className="homeMenuBox">
                    <img src={icon_skrr_black} alt="icon_skrr_black" id="icon1"/>
                    <p id="pHome">빌렸스컬 이용법</p>
                </div>

                <div className="explainContainer">
                    <div className="explainBox1">
                        <div className="imgContainer">
                            <img src={school} alt="school" id="school"/>
                            <img src={icon_number1} alt="icon_number1" id="icon_number1"/>
                        </div>
                        <div className="pContainer2">
                            <p id="p4">학교에서 제품을 구독해요</p>
                            <p id="p5">빌렸스컬은 오직 학교를 대상으로 테크제품 구독을 실시합니다.
                            노트북, 테블릿부터 VR기어, 드론까지.. 비싼가격을 모두 치르지 않아도 돼요.
                            최소 일주일부터 구독으로 만나보세요!</p>
                        </div>
                    </div>
                    <div className="explainBox2">
                        <div className="imgContainer">
                            <img src={students} alt="students" id="students" />
                            <img src={icon_number2} alt="icon_number2" id="icon_number2" />
                        </div>
                        <div className="pContainer2">
                            <p id="p4">학생들은 자유롭게 이용해요</p>
                            <p id="p5">빌렸스컬에서 제공하는 실시간 예약 서비스를 통해 언제 어디에서나
                            필요한 테크제품을 예약하고, 자유롭게 사용할 수 있어요</p>
                        </div>
                    </div>
                </div>

                <div className="advantagesBanner">
                    <div className="homeMenuBox2">
                        <img src={icon_skrr_purple} alt="icon_skrr_purple" id="icon2"/>
                        <p id="pHome">빌렸스컬만의 장점이에요</p>
                    </div>
                    <div className="advantagesContainer">
                        <div class="advantagesLeft">
                            <div className="advantagesBox1">
                                <div className="advantage1">
                                    <p id="p7">부담없는!</p>
                                    <p id="p8">값비싼 테크제품을 최소 일주일부터
                                        부담없이 단기구독 해보세요</p>
                                </div>
                                <img src={advantage1} id="imageBox1"/>
                            </div>
                            <div className="advantagesBox2">
                                <div class="advantage2">
                                    <p id="p7">자유로운!</p>
                                    <p id="p8">학생들은 언제 어디서나 필요할 때
                                        실시간 예약 및 사용할 수 있어요</p>
                                </div>
                                <img src={advantage2} id="imageBox2"/>
                            </div>
                        </div>
                        <div class="advantagesRight">
                            <div className="advantagesBox3">
                                <div class="advantage3">
                                    <p id="p7">안심되는!</p>
                                    <p id="p8">대여중 사고가 날까봐 걱정이신가요?
                                        삼성화재와 함께하는 스컬케어가 보상해드려요.</p>
                                </div>
                                <img src={advantage3} id="imageBox3"/>
                            </div>
                            <div className="advantagesBox4">
                                <div class="advantage4">
                                    <p id="p7">지속가능한!</p>
                                    <p id="p8">전자제품 '아나바다'를 실천해요.
                                        불필요한 소비를 줄이고
                                        탄소배출량을 줄일 수 있답니다.</p>
                                </div>
                                <img src={advantage4} id="imageBox4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="functionContainer">
                    <div className="functionBox1">
                        <img src={week1} id="imageBox5"/>
                        <div className="pContainer3">
                            <p id="p9">최소 일주일부터 필요한 만큼만!</p>
                            <p id="p10">부담되는 장기인수형 렌탈 대신, 단기구독으로 부담없이 즐기세요</p>
                        </div>
                    </div>
                    <div className="functionBox2">
                        <img src={buy} id="imageBox6"/>
                        <div className="pContainer4">
                            <p id="p9">구입도 가능!</p>
                            <p id="p10">사용중인 제품을 구입할 수도 있어요<br/>
                            인수할 경우 이미 납부한 구독료의 일부를 돌려드려요</p>
                        </div>
                    </div>
                </div>

                <Link to="/product"><button id="viewButton">제품 보러가기</button></Link>
            </div>

            {/* <footer id="homeFooter">
                <img src={likelion} alt="likelion" id="likelion"/>
            </footer> */}
        </div>
    )
}

export default Home