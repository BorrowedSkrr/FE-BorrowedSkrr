import React, { useState } from 'react';
import { Link } from "react-router-dom";
import colors from '../styles/colors';
import { styled } from 'styled-components';
import iconSkrrBlack from '../images/icon-skrr-black.png'
import iconBack from '../images/icon_back.svg'

const StyleP = styled.p`
    color: ${colors.gray2};
    font-size: 2rem;
    font-weight: 700;
`

const StyleValid = styled.p`
    color: ${({valid}) =>
        valid ? colors.mainGreen : colors.mainOrange
    };
    font-size: 1.3rem;
    font-weight: 500;
`

const StyleInput = styled.input`
    padding: 2.2rem 2rem;
    background-color: ${colors.gray5};
    color: white;
    font-size: 2rem;
    border-raidus: 0.417vw;
`
const StyleDiv = styled.div`
    width: 19.792vw;
    height: 6.4rem;
    background-color: ${colors.gray5};
    color: white;
    font-size: 2rem;
    border-raidus: 0.417vw;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    line-height: 6.4rem;
    padding: 0 2rem;
`

const StyleIdDiv = styled.div`
    height: 6.4rem;
    background-color: ${colors.gray5};
    color: ${colors.gray2};
    font-size: 2rem;
    border-raidus: 0.417vw;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    line-height: 6.4rem;
    padding: 0 2rem;
`

const StyleButton = styled.button`
    flex-grow:1;
    height: 6.4rem;
    color: ${colors.gray2};
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5vh;
`

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    gap: 1.6rem;
`

const StyleBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 30.208vw;
    margin: 0 auto;
    paddingTop: 7rem;
`

const MyPageStaffEdit = () => {
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

    // 첫 렌더링시에는 검사 결과 보이지 않음
    const [initPw, setinitPw] = useState(false);
    const [initPwCheck, setinitPwCehck] = useState(false);

    // 유효성 검사 결과를 관리할 상태 변수들
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [isPasswordLengthValid, setPasswordLengthValid] = useState(false);
    const [isPasswordCheckValid, setPasswordCheckValid] = useState(false);

    // 비밀번호 유효성 검사 함수
    const validatePassword = (value) => {
        // 비밀번호 길이가 8자 이상인지 확인
        const isLengthValid = value.length >= 8;

        // 영문 문자가 포함되어 있는지 확인
        const isLetterIncluded = /[a-zA-Z]/.test(value);

        // 숫자가 포함되어 있는지 확인
        const isNumberIncluded = /\d/.test(value);

        // 결과를 setPasswordValid로 설정
        setPasswordValid(isNumberIncluded && isLetterIncluded);
        setPasswordLengthValid(isLengthValid)
    };

    // 비밀번호 확인 유효성 검사 함수
    const validatePasswordCheck = (value) => {
        // 비밀번호 확인이 일치하는지 확인
        const isMatch = value === password;

        // 결과를 setPasswordCheckValid로 설정
        setPasswordCheckValid(isMatch);
    };

    const handlePasswordChange = (e) => {
        const newValue = e.target.value;
        setPassword(newValue);
        validatePassword(newValue);

        setinitPw(true)
    };
    
    const handlePasswordCheckChange = (e) => {
        const newValue = e.target.value;
        setPasswordCheck(newValue);
        validatePasswordCheck(newValue);
        
        setinitPwCehck(true)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // 각 입력 필드의 값에 대한 유효성 검사 함수 호출
        validatePassword(password);
        validatePasswordCheck(passwordCheck);

        // 모든 유효성 검사를 통과한 경우 서버로 정보 전송
        if (isPasswordValid && isPasswordLengthValid && isPasswordCheckValid) {
            
        }
    };

    return (
        <div>
            <StyleBody>
                <img src={iconSkrrBlack} alt='로고' style={{width:'60px', height:'60px', alignSelf:'center'}}/>
                <form onSubmit={handleFormSubmit}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'8px', marginBottom:'10rem'}}>
                        <Link to="/myPageStaff">
                        <button style={{
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            color: `${colors.gray1}`,
                            padding: '1rem',
                            paddingLeft: '0'
                        }}><img src={iconBack} style={{width:'2rem'}}/>취소</button>
                        </Link>
                        <p style={{
                            color: '#FFF',
                            fontSize: '3.2rem',
                            fontWeight: '700',
                        }}>내 정보 수정</p>
                        <button style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: `${colors.mainGreen}`,
                            padding: '1rem',
                            paddingRight: '0'
                        }} type="submit">완료</button>
                    </div>
                    <StyleContainer>
                        <StyleP>이름</StyleP>
                        <StyleInput type="text" placeholder="반드시 본명으로 입력" />
                    </StyleContainer>
                    <StyleContainer>
                        <StyleP>아이디</StyleP>
                        <StyleIdDiv>원래 아이디</StyleIdDiv>
                    </StyleContainer>
                    <StyleContainer>
                        <StyleP>비밀번호</StyleP>
                        <StyleInput type="password" placeholder="영문, 숫자 포함 8자리 이상" onChange={handlePasswordChange}/>
                        {initPw &&
                            <>
                                <StyleValid valid={isPasswordLengthValid}>︎✓ 8자 이상 입력</StyleValid> 
                                <StyleValid valid={isPasswordValid}>✓ 영문, 숫자 포함</StyleValid>
                            </>
                        }
                    </StyleContainer>
                    <StyleContainer>
                        <StyleP>비밀번호 확인</StyleP>
                        <StyleInput type="password" placeholder="영문, 숫자 포함 8자리 이상" onChange={handlePasswordCheckChange}/>
                        {initPwCheck && 
                            <>
                                { isPasswordCheckValid ? (
                                    <StyleValid valid={isPasswordCheckValid}>확인 완료되었습니다 :)</StyleValid>
                                ) : (
                                    <StyleValid valid={isPasswordCheckValid}>동일하지 않은 비밀번호입니다 :(</StyleValid>
                                )} 
                            </>
                        }
                    </StyleContainer>
                    <StyleContainer>
                        <StyleP>학교이름</StyleP>
                        <StyleInput type="text" placeholder="풀네임으로 입력 (ex. 스컬고등학교)"/>
                    </StyleContainer>
                    <StyleContainer>
                        <StyleP>재직증명서 첨부</StyleP>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                            <StyleDiv>
                                {selectedFileName}
                            </StyleDiv>
                            <button 
                                style={{
                                    width: '9.375vw',
                                    borderRadius: '8px',
                                    border: `2px solid ${colors.gray3}`,
                                    background: `${colors.gray4}`,
                                    color: `${colors.gray2}`,
                                    fontSize: '2rem',
                                    fontWeight: '700'
                                }} 
                                onClick={handleFileButtonClick}>
                                    파일선택
                            </button>
                        </div>
                        
                    </StyleContainer>
                    <StyleContainer>
                        <StyleButton>회원탈퇴</StyleButton>
                    </StyleContainer>
                    
                </form>
            </StyleBody>
        </div>
    )
}

export default MyPageStaffEdit;
