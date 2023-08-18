import axios from 'axios';
import ButtonMypage from "../components/button/button-mypage";
import colors from "../styles/colors";
import { useEffect, useState } from 'react';
import MyPageStudent from '../components/MyPage-Student';
import MyPageRental from '../components/MyPage-Rental';
import imgProfile from "../images/profile-teacher.svg";
import { styled } from 'styled-components';
import MyPageCopy from '../components/MyPage-Copy';
import PermissionModal from '../components/modal/permissionModal';
import { Link } from 'react-router-dom';
import Api from '../api';

const StyleButton = styled.button`
    background-color: ${colors.gray4};
    color: ${colors.gray2};
    border-radius: 0.417vw;
    font-size: 1.5rem;
    padding: 0.8rem 2.1rem;
`

const MyPageStaff = () => {
    const [modalShow, setModalShow] = useState(false);
    // 학교 코드
    const [schoolCode, setSchoolCode] = useState();
    // 관리자 정보
    const [user, setUser] = useState();
    // 권한 요청 학생 데이터
    const [studentData, setStudentData] = useState([]);
    // 대여 현황 데이터
    const [rentalData, setRentalData] = useState([]);
    // 모달창
    const [isModalVisible, setModalVisible] = useState(false);
    // 학생 관리에서 버튼이 눌린 객체 정보. (state - 거절, 허용, 삭제)
    const [manageStudent, setManageStudent] = useState({'name':'','state':''})

    // 여러 개의 상태를 업데이트하는 함수
    const initData = (schoolCode, user, studentData, rentalData) => {
        setSchoolCode(schoolCode);
        setUser(user);
        setStudentData(studentData);
        setRentalData(rentalData);
    };

    const onClickLogout = () => {
        let token = localStorage.getItem('token')

        localStorage.clear()
        window.location.replace('http://localhost:3000/')
    }

    const manageStudentListener = ({name, state}) => {
        if(state === '거절'){
            // 모달창 띄운 후, 거절 누르면 거절 눌렀다는 정보 서버로 넘긴후 정보 다시 받아오기. 취소 누르면 냅두기
        } else if(state === '허용'){
            // 서버로 허용되었다는 정보 넘긴 후, 학생 정보 다시 받아오기
        } else if(state === '삭제'){
            // 모달창 띄운 후, 삭제 누르면 삭제됐다는 정보 서버로 넘긴 후 정보 다시 받아오기. 취소 누르면 냅두기
        }
    }

    const updateStudentData = (name, state) => {
        const dataToSend = {
            'name': name,
            'state': state
        };
        const fetchData = async () => {
            try{
                const response = await axios.post('https://jsonplaceholder.typicode.com/comments', dataToSend);
                console.log('Response:', response.data);
                setStudentData(response);
            } catch(error){
                console.log(error);
            } 
        };
        fetchData();
    }

    const handlemodalreject = (name, state) => {
        // updateStudentData(name, state);
        console.log(name, state)
    };


    const handlemodalremove = (name, state) => {
        updateStudentData(name, state);
    };

    const studentButtonListener = (name, state) => {
        console.log('클릭', name, state)
        if(state === '거절'){
            // 모달창 띄운 후, 거절 누르면 거절 눌렀다는 정보 서버로 넘긴후 정보 다시 받아오기. 취소 누르면 냅두기
            setManageStudent({name,state})
            setModalVisible(true);
            setModalShow(true);
        } else if(state === '허용'){
            // POST(서버로 허용되었다는 정보 넘긴 후, 학생 정보 다시 받아오기)
            updateStudentData(name, state);
        } else if(state === '삭제'){
            // 모달창 띄운 후, 삭제 누르면 삭제됐다는 정보 서버로 넘긴 후 정보 다시 받아오기. 취소 누르면 냅두기
            setManageStudent({name,state})
            setModalVisible(true);
            setModalShow(true);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
        window.location.replace('http://localhost:3000/')
        }
    }, []);
    
    useEffect(() => {
        let isMounted = true; // 마운트 상태를 나타내는 변수

        const fetchData = async () => {
            try{
                const resultSchoolCode = await Api.get(`https://jsonplaceholder.typicode.com/comments/1`);
                const resultUser = await Api.get(`https://jsonplaceholder.typicode.com/users/2`);
                const resultStudent = await Api.get(`https://jsonplaceholder.typicode.com/users`);
                const resultRental = await Api.get(`https://jsonplaceholder.typicode.com/photos`);
                
                // setSchoolCode(resultSchoolCode.data);
                // setUser(resultUser.data);
                // setStudentData(resultStudent.data);
                // setRentalData(resultRental.data);

                if (isMounted){
                    initData(resultSchoolCode.data, resultUser.data, resultStudent.data, resultRental.data)
                }
            } catch (error){
                console.log(error);
            }
        };
        fetchData();

        return () => {
            isMounted = false; // 컴포넌트가 언마운트될 때 변수를 false로 설정
        };
    }, []);

    return (
        <div className="keemBody" style={{marginTop:'8vh', marginBottom:'14vh', gap:'20px'}}>
            <div style={{width:'100%', display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '2fr 1fr', gap: "1vw"}}>
                <div className='keemContainer'>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <img 
                            src={imgProfile}
                            alt='프로필'
                            style={{width:'100px', height:'100px'}}
                        />
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'1.563vw', gap: '16px'}}>
                            <p style={{fontSize:'2rem'}}>스컬고등학교 1학년 2반</p>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'0.573vw'}}>
                                <p style={{fontSize:'2.8rem', fontWeight:'700'}}>김교사</p>
                                <p style={{fontSize:'2rem', fontWeight:'700'}}>선생님</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', gap: '16px', marginRight:'20px'}}>
                        <Link to='/MyPageStaffEdit'><StyleButton>정보수정</StyleButton></Link>
                        <StyleButton onClick={() => onClickLogout}>로그아웃</StyleButton>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', padding:'1.25vw', backgroundColor:`${colors.gray5}`, borderRadius:'0.417vw'}}>
                    <p style={{color:`${colors.gray2}`, fontSize:'2rem', fontWeight:'700', marginTop:'6px'}}>학교코드</p>
                    <p style={{color:`${colors.gray2}`, fontSize:'1.5rem', marginTop:'12px', marginBottom:'18px'}}>코드를 복사한 후, 학생들에게 공유해주세요!</p>
                    <MyPageCopy text="3FD5AEGH"/>
                </div>
            </div>

            
            <div style={{width:'100%', display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '1fr 1fr 1fr', gap: "1vw"}}>
                <Link to="/likeStaff"><ButtonMypage img={'white-line-heart.png'} alt={'아이콘'} text={"관심목록"} /></Link>
                <Link to="/cartStaff"><ButtonMypage img={'icon-shop-bag.svg'} alt={'아이콘'} text={"장바구니"} /></Link>
                <Link to="/subscribeStaff"><ButtonMypage img={'icon-money.svg'} alt={'아이콘'} text={"구독 내역"} /></Link>
            </div>

            <MyPageStudent studentData={studentData} studentButtonListener={studentButtonListener}/>
            <MyPageRental rentalData={rentalData}/>
            {/* {isModalVisible && <Modal name={manageStudent.name} state={manageStudent.state}/>} */}

            {modalShow && 
                <PermissionModal
                    name={manageStudent.name}
                    state={manageStudent.state}
                    show={modalShow}
                    onHide = {() => setModalShow(false)}
                    handlemodalreject = {handlemodalreject}
                    handlemodalremove = {handlemodalremove}
                />
            }
        </div>
    )
}

export default MyPageStaff;