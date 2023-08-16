import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import likelion from "../images/likelion.png";

function SignStaff() {
    //파일 업로드 시 파일명 가져오기
    const fileInputRef = React.useRef(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileButtonClick = (e) => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setSelectedFileName(selectedFile.name);
        }
    };

    //폼 제출
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    //유효성 검사
    const isIdAvailable = true; 
    const [isPasswordConfirmationStarted, setIsPasswordConfirmationStarted] = useState(false);
    const [isPasswordCheckAvailable, setIsPasswordCheckAvailable] = useState(false);
    const [isPassword1Available, setIsPassword1Available] = useState(false);
    const [isPassword2Available, setIsPassword2Available] = useState(false);

    const handlePasswordChange = (e) => {
        const password = document.getElementById('signStaffPassword').value;
        const passwordCheck = document.getElementById('signStaffPasswordCheck').value;

        if (e.target.id === 'signStaffPasswordCheck') {
            if (passwordCheck === password) {
                setIsPasswordCheckAvailable(true);
            } else {
                setIsPasswordCheckAvailable(false);
            }

            setIsPasswordConfirmationStarted(true);
        } else if (e.target.id === 'signStaffPassword') {
            setIsPasswordConfirmationStarted(true);
            setIsPasswordCheckAvailable(passwordCheck === password);

            // 비밀번호 8자 이상 판별
            setIsPassword1Available(password.length >= 8);

            // 영문과 숫자 포함 여부 판별
            setIsPassword2Available(/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password));
        }

        if (!password && !passwordCheck) {
            setIsPasswordCheckAvailable(false);
            setIsPasswordConfirmationStarted(false);
        }
    };

    return (
        <div className="signStaff">
            <nav id="signStaffNav">
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

            <div className="signStaffBody">
                <div className="signButtonContianer">
                    <button id="staff">교직원</button>
                    <button id="student"><Link to="/signStudent">학생</Link></button>
                </div>
                <p id="signStaffTitle">교직원 회원가입</p>

                <form onSubmit={handleFormSubmit}>
                    <p id="NameTitle">이름</p>
                    <input type="text" placeholder="반드시 본명으로 입력" id="signStaffName" />

                    <p id="IdTitle">아이디</p>
                    <input type="text" placeholder="아이디 입력" id="signStaffId" />
                    {isIdAvailable ? (
                        <p id="IdExplain">사용 가능한 아이디입니다 :)</p>
                    ) : (
                        <p id="IdExplain" style={{ color: "#FF5D47" }}>이미 존재하는 아이디입니다 :(</p>
                    )}

                    <p id="PasswordTitle">비밀번호</p>
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStaffPassword" onChange={handlePasswordChange} />
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
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStaffPasswordCheck" onChange={handlePasswordChange} />
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

                    <p id="SchoolTitle">학교이름</p>
                    <input type="text" placeholder="풀네임으로 입력 (ex. 스컬고등학교)" id="signStaffSchool" />

                    <p id="FileTitle">재직증명서 첨부</p>
                    <div className="fileUpload">
                        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                        <div className="selectedFileNameContainer">
                            {selectedFileName}
                        </div>
                    </div>
                    <button className="fileUploadBtn" onClick={handleFileButtonClick}>파일선택</button>

                    <div class="buttonContainer">
                        {isIdAvailable && isPassword1Available && isPassword2Available && isPasswordCheckAvailable ? (
                            <Link to="/loginstaff">
                                <button type="submit" id="signStaffButton">회원가입 완료</button>
                            </Link>
                        ) : (
                            <button type="submit" id="signStaffButton" disabled>회원가입 완료</button>
                        )}
                    </div>

                </form>
            </div>

            <footer id="signStaffFooter">
                <img src={likelion} alt="likelion" id="likelion" />
            </footer>
        </div>
    )
}

export default SignStaff;
