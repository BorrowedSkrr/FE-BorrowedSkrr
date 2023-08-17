import React from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import likelion from "../images/likelion.png";

function LoginStudent() {
    return (
        <div class="loginStudent">
            {/* <nav id="loginStudentNav">
                <div class="logo-small">
                    <Link to="/">
                    <img src={logo_small} alt="logo_small" id="logo_small"/>
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login"><Link to="/loginStudent">LOGIN</Link></button>
                </div>
            </nav> */}

            <div className="loginStudentBody">        
                <div className="loginButtonContianer">
                    <button id="LoginstaffBtn"><Link to="/loginStaff">교직원</Link></button>
                    <button id="LoginstudentBtn">학생</button>
                </div>
                <p id="loginStudentTitle">학생 로그인</p>
                <form id="loginStudentForm">
                    <p id="idTitle">아이디</p>
                    <input type="text" placeholder="아이디를 입력하세요" id="loginStudentId" />
                    <p id="passwordTitle">비밀번호</p>
                    <input type="password" placeholder="비밀번호를 입력하세요" id="loginStudentPassword" />

                    <div className="noAccess">접근권한 허용 후에 이용할 수 있어요.</div>
                </form>
                
                <button type="submit" id="loginStudentButton">로그인</button>

                <div className="pContainer5">
                    <p id="p11">혹시, 처음이신가요?</p>
                    <p id="p11"><Link to="/SignStudent">회원가입하기</Link></p>
                </div>
            </div>

            <footer id="loginStudentFooter"></footer> 
        </div>
    )
}

export default LoginStudent
