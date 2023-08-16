import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import likelion from "../images/likelion.png";

function SignStudent() {
    //유효성 검사 문구
    const isIdAvailable = true;
    const [isPasswordConfirmationStarted, setIsPasswordConfirmationStarted] = useState(false);
    const [isPasswordCheckAvailable, setIsPasswordCheckAvailable] = useState(false);
    const [isPassword1Available, setIsPassword1Available] = useState(false);
    const [isPassword2Available, setIsPassword2Available] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handlePasswordChange = (e) => {
        const password = document.getElementById('signStudentPassword').value;
        const passwordCheck = document.getElementById('signStudentPasswordCheck').value;

        if (e.target.id === 'signStudentPasswordCheck') {
            // 비밀번호와 비밀번호 확인 간의 일치 여부 검사
            if (passwordCheck === password) {
                setIsPasswordCheckAvailable(true);
            } else {
                setIsPasswordCheckAvailable(false);
            }

            setIsPasswordConfirmationStarted(true);
        } else if (e.target.id === 'signStudentPassword') {
            setIsPasswordConfirmationStarted(true); // 입력 시작하면 문구 표시
            setIsPasswordCheckAvailable(passwordCheck === password); // 비밀번호 입력 시에 true/false를 바꾸며 문구를 표시

            // 비밀번호 8자 이상 판별
            setIsPassword1Available(password.length >= 8);

            // 영문과 숫자 포함 여부 판별
            setIsPassword2Available(/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password));
        }

        // 비밀번호 확인과 비밀번호 입력이 모두 비어있을 때 문구 숨기기
        if (!password && !passwordCheck) {
            setIsPasswordCheckAvailable(false);
            setIsPasswordConfirmationStarted(false);
        }
    };

    return (
        <div class="signStudent">
            <nav id="signStudentNav">
                <div className="logo-small">
                    <Link to="/home">
                        <img src={logo_small} alt="logo_small" id="logo_small"/>
                    </Link>
                </div>
                <div className="buttonContainer">
                    <button id="button-product">PRODUCT</button>
                    <button id="button-login"><Link to="/loginStudent">LOGIN</Link></button>
                </div>
            </nav>

            <div className="signStudentBody">
                <div className="signButtonContianer">
                    <button id="LoginstaffBtn"><Link to="/signStaff">교직원</Link></button>
                    <button id="LoginstudentBtn">학생</button>
                </div>

                <p id="signStudentTitle">학생 회원가입</p>

                <form onSubmit={handleFormSubmit}>
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
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStudentPassword" onChange={handlePasswordChange} />
                    {(isPasswordConfirmationStarted && !isPassword1Available) && (
                        <p id="Password1Explain" style={{ color: "#FF5D47" }}>✓ 8자 이상 입력</p>
                    )}
                    {(isPasswordConfirmationStarted && !isPassword2Available) && (
                        <p id="Password2Explain" style={{ color: "#FF5D47" }}>✓ 영문, 숫자 포함</p>
                    )}
                    {isPassword1Available && (
                        <p id="Password1Explain">✓ 8자 이상 입력</p>
                    )}
                    {isPassword2Available && (
                        <p id="Password2Explain">✓ 영문, 숫자 포함</p>
                    )}

                    <p id="CheckPasswordTitle">비밀번호 확인</p>
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStudentPasswordCheck" onChange={handlePasswordChange} />
                    {(isPasswordConfirmationStarted && !isPasswordCheckAvailable) && (
                        <p id="PasswordCheckExplain" style={{ color: '#FF5D47' }}>
                            동일하지 않은 비밀번호입니다 :(
                        </p>
                    )}
                    {isPasswordConfirmationStarted && isPasswordCheckAvailable && (
                        <p id="PasswordCheckExplain" style={{ color: '#D2F75A' }}>
                            확인 완료되었습니다 :)
                        </p>
                    )}

                    <p id="SchoolTitle">학교코드</p>
                    <input type="text" placeholder="학교코드 입력" id="signStudentSchool" />
                    
                    <p id="InformationTitle">학년/반/번호</p>
                    <input type="text" placeholder="ex. 1학년 1반 1번" id="signStudentInformation" />

                    <div class="buttonContainer">
                        {isIdAvailable && isPassword1Available && isPassword2Available && isPasswordCheckAvailable ? (
                            <Link to="/loginstudent">
                                <button type="submit" id="signStudentButton">회원가입 완료</button>
                            </Link>
                        ) : (
                            <button type="submit" id="signStudentButton" disabled>회원가입 완료</button>
                        )}
                    </div>
                </form>
            </div>

            <footer id="signStudentFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default SignStudent
