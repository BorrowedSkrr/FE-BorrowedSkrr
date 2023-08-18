import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo_small from "../images/logo-small.png";
import likelion from "../images/likelion.png";
import Api from '../api';

function LoginStaff() {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const handleIdChange = (e) => {
        const newValue = e.target.value;
        setId(newValue);
    };

    const handlePasswordChange = (e) => {
        const newValue = e.target.value;
        setPw(newValue);
    };

    const onClickLogin = () => {
        console.log(id,pw);
        // Api.post("accounts/api-auth/login/"
        // ,{
        //     classnetid : id,
        //     classnetpw : pw
        // }
        // )
        // .then(res => {
        //     console.log(res.data);
        //     localStorage.clear();
        //     localStorage.setItem('id', res.data.id);
        //     localStorage.setItem('token', res.data.token);
        //     window.location.replace('/home');
        // })
        // .catch((err) => {
        //     console.log(err);
        // })

        const fetchData = async () => {
            try{
                const res = await Api.post("accounts/api-auth/login/",{
                    classnetid : id,
                    classnetpw : pw
                });

                console.log(res.data);
                localStorage.clear();
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('token', res.data.token);
                window.location.replace('/home');
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }

    return (
        <div className="loginStaff">
            {/* <nav id="loginStaffNav">
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

            <div className="loginStaffBody">
                <div className="loginButtonContianer">
                    <button id="staff">교직원</button>
                    <button id="student"><Link to="/loginStudent">학생</Link></button>
                </div>
                <p id="loginStaffTitle">교직원 로그인</p>
                <form id="loginStaffForm">
                    <p id="idTitle">아이디</p>
                    <input type="text" placeholder="아이디를 입력하세요" id="loginStaffId" onChange={handleIdChange}/>
                    <p id="passwordTitle">비밀번호</p>
                    <input type="password" placeholder="비밀번호를 입력하세요" id="loginStaffPassword"/>
                </form>

                <button type="submit" id="loginStaffButton">로그인</button>

                <div className="pContainer5">
                    <p id="p11">혹시, 처음이신가요?</p>
                    <p id="p11"><Link to="/SignStaff">회원가입하기</Link></p>
                </div>
            </div>

            <footer id="loginStaffFooter"></footer>
        </div>
    )
}

export default LoginStaff