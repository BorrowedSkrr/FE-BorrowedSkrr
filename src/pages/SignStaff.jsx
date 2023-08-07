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

    const handleFormSubmit = (e) => {
        e.preventDefault();
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
                    <p id="PasswordTitle">비밀번호</p>
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStaffPassword" />
                    <p id="CheckPasswordTitle">비밀번호 확인</p>
                    <input type="password" placeholder="영문, 숫자 포함 8자리 이상" id="signStaffPasswordCheck" />
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
                        <button type="submit" id="signStaffButton">회원가입 완료</button>
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
