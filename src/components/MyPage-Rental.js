import colors from "../styles/colors";
import ListManageRental from "./list/list-manage-rental";
import ListManageStudent from "./list/list-manage-student";
import CustomPagination from "./paging/pagination";
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

const StyleDiv = styled.div`
    position: relative;
    width: 100%;
    height: ${({rentaldatalength}) =>
        (rentaldatalength === 0 ? '25vh' : 'auto')};
    padding: 40px 24px;
    background-color: ${colors.gray5};
    border-radius: 0.833vw;
`;
const StyleGrid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 4.5fr 1fr 3fr 1.5fr;
    justify-items: center;
    font-size: 1.6rem;
    padding-top: 32px;

    p {
        color: ${colors.gray2}; /* Set the font color to black */
    }
`

const MyPageRental = ({rentalData}) => {
    const [slicedData, setSlicedData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5; // 페이지당 항목 수
    const totalPageCount = Math.ceil((rentalData.length) / itemsPerPage); // 올림 값 계산
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
        setSlicedData(rentalData.slice(startIndex, endIndex));
    }, [rentalData, page])

    return (
        <StyleDiv rentaldatalength={rentalData.length}>
            <div style={{display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
                <p style={{fontSize:"2.4rem", fontWeight:"700"}}>대여 현황</p>
                {rentalData.length > 0 && 
                    <StyleGrid>
                        <p style={{justifySelf:'start', paddingLeft: '130px'}}>제품명</p>
                        <p>수량</p>
                        <p>대여 일시</p>
                        <p>대여 학생</p>
                    </StyleGrid>
                }
            </div>
            {/* studentData가 존재할 때만 ListManageStudent 컴포넌트를 렌더링 */}
            {rentalData.length === 0 && <p style={{position: 'absolute', color:'#7F85A3', fontSize: '2rem', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>권한을 요청한 학생이 없습니다.</p>}
            {rentalData.length > 0 && <ListManageRental data={slicedData}/>}
            {rentalData.length > 0 && <CustomPagination page={page} itemsPerPage={itemsPerPage} totalPageCount={totalPageCount} totalDataCount={rentalData.length} pageListener={pageListener} />}
        </StyleDiv>
    )
}

export default MyPageRental;