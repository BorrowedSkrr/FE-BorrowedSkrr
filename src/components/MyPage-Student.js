import colors from "../styles/colors";
import ListManageStudent from "./list/list-manage-student";
import CustomPagination from "./paging/pagination";
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

const StyleDiv = styled.div`
    position: relative;
    width: 100%;
    height: ${({studentdatalength}) =>
        (studentdatalength === 0 ? '30vh' : 'auto')};
    padding: 4rem 2.4rem;
    background-color: ${colors.gray5};
    border-radius: 0.833vw;
`;

const MyPageStudent = ({studentData}) => {
    const [slicedData, setSlicedData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 4; // 페이지당 항목 수
    const totalPageCount = Math.ceil((studentData.length) / itemsPerPage); // 올림 값 계산
    const pageRange = 5;

    const pageListener = (page) => {
        setPage(page);
    };

    // useEffect(() => {
    //     // 현재 페이지에 해당하는 데이터 슬라이싱
    //     const startIndex = (page - 1) * itemsPerPage;
    //     const endIndex = startIndex + itemsPerPage;
    //     setSlicedData(studentData.slice(startIndex, endIndex));
    // }, [])

    useEffect(() => {
        // 현재 페이지에 해당하는 데이터 슬라이싱
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setSlicedData(studentData.slice(startIndex, endIndex));
    }, [studentData, page])

    return (
        <StyleDiv studentdatalength={studentData.length}>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem", paddingLeft: "8px", paddingRight: "8px"}}>
                <p style={{fontSize:"2.4rem", fontWeight:"700"}}>학생 관리</p>
                {studentData.length > 0 && <p style={{fontSize:"1.5rem", color:`${colors.gray2}`}}>허용을 해주셔야 학생들이 이용할 수 있으니까 빨랑 허용부탁드려요. 우리학교 학생이 아닌거같으면 거절 누르세염</p>}
            </div>
            
            {/* studentData가 존재할 때만 ListManageStudent 컴포넌트를 렌더링 */}
            {studentData.length === 0 && <p style={{position: 'absolute', color:'#7F85A3', fontSize: '2rem', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>권한을 요청한 학생이 없습니다.</p>}
            {studentData.length > 0 && <ListManageStudent data={slicedData}/>}
            {studentData.length > 0 && <CustomPagination page={page} itemsPerPage={itemsPerPage} totalPageCount={totalPageCount} totalDataCount={studentData.length} pageListener={pageListener} />}
        </StyleDiv>
    )
}

export default MyPageStudent;