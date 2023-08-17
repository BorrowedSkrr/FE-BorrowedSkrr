import React from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import likelion from "../images/likelion.png";

function SignStudent() {
    //유효성 검사 문구
    const isIdAvailable = true;
    const isPassword1Available = true;
    const isPassword2Available = true;
    const isPasswordCheckAvailable = true;

    return (
        <div class="signStudent">
            {/* <nav id="signStudentNav">
                <div className="logo-small">
                    <Link to="/home">
                        <img src={logo_small} alt="logo_small" id="logo_small"/>
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login"><Link to="/loginStudent">LOGIN</Link></button>
                </div>
            </nav> */}

            <div className="signStudentBody">
                <div className="signButtonContianer">
                    <button id="LoginstaffBtn"><Link to="/signStaff">교직원</Link></button>
                    <button id="LoginstudentBtn">학생</button>
                </div>

                <p id="signStudentTitle">학생 회원가입</p>

                <form>
                    <p id="NameTitle">이름</p>
                    <input type="text" placeholder="반드시 본명으로 입력" id="signStudentName" />

                    <p id="IdTitle">아이디</p>
                    <input type="text" placeholder="아이디 입력" id="signStudentId" />                  
                    {isIdAvailable ? (
                        <p id="IdExplain">사용 가능한 아이디입니다 :)</p>
                    ) : (
                        <p id="IdExplain" style={{ color: "#FF5D47" }}>이미 존재하는 아이디입니다 :(</p>
                    )}

                    <p id="PasswordTitle">비밀번호</p>
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStudentPassword" />
                    {isPassword1Available ? (
                        <p id="Password1Explain">︎✓ 8자 이상 입력</p>
                    ) : (
                        <p id="Password1Explain" style={{ color: "#FF5D47" }}>︎✓ 8자 이상 입력</p>
                    )}
                    {isPassword2Available ? (
                        <p id="Password2Explain">✓ 영문, 숫자 포함</p>
                    ) : (
                        <p id="Password2Explain" style={{ color: "#FF5D47" }}>✓ 영문, 숫자 포함</p>
                    )} 

                    <p id="CheckPasswordTitle">비밀번호 확인</p>
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStudentPasswordCheck" />
                    {isPasswordCheckAvailable ? (
                        <p id="PasswordCheckExplain">확인 완료되었습니다 :)</p>
                    ) : (
                        <p id="PasswordCheckExplain" style={{ color: "#FF5D47" }}>동일하지 않은 비밀번호입니다 :(</p>
                    )} 

                    <p id="SchoolTitle">학교코드</p>
                    <input type="text" placeholder="학교코드 입력" id="signStudentSchool" />
                    
                    <p id="InformationTitle">학년/반/번호</p>
                    <input type="text" placeholder="ex. 1학년 1반 1번" id="signStudentInformation" />

                    <div class="buttonContainer">
                        <button type="submit" id="signStaffButton">회원가입 완료</button>
                    </div>
                </form>
            </div>
{/* 
            <footer id="signStudentFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer> */}
        </div>
    )
}

export default SignStudent
