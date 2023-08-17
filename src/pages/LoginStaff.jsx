import React from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import likelion from "../images/likelion.png";

function LoginStaff() {
    return (
        <div className="loginStaff">
            <nav id="loginStaffNav">
                <div className="logo-small">
                    <Link to="/">
                    <img src={logo_small} alt="logo_small" id="logo_small"/>
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login"><Link to="/loginStaff">LOGIN</Link></button>
                </div>
            </nav>

            <div className="loginStaffBody">
                <div className="loginButtonContianer">
                    <button id="staff">교직원</button>
                    <button id="student"><Link to="/loginStudent">학생</Link></button>
                </div>
                <p id="loginStaffTitle">교직원 로그인</p>
                <form>
                    <p id="idTitle">아이디</p>
                    <input type="text" placeholder="아이디를 입력하세요" id="loginStaffId"/>
                    <p id="passwordTitle">비밀번호</p>
                    <input type="password" placeholder="비밀번호를 입력하세요" id="loginStaffPassword"/>

                    <div className="buttonContainer">
                        <button type="submit" id="loginStaffButton">로그인</button>
                    </div>
                </form>

                <div className="pContainer5">
                    <p id="p11">혹시, 처음이신가요?</p>
                    <p id="p11"><Link to="/SignStaff">회원가입하기</Link></p>
                </div>
            </div>

            <footer id="loginStaffFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default LoginStaff
