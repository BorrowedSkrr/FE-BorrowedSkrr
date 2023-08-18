import colors from "../styles/colors";
import iconBack from '../images/icon_back.svg'
import { Link } from "react-router-dom";
import iconHeart from '../images/icon-line-heart.svg'
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../components/paging/pagination";
import ItemLike from "../components/listItem/item-like";
import ListLike from "../components/list/list-like";
import ListStudentRental from "../components/list/list-student-rental";
import { styled } from "styled-components";

const StyleGrid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 6fr 1fr 3fr;
    justify-items:center;
    align-items: center;
    border-radius: 0.417vw;
    padding: 0 1.6rem;
    cursor: pointer;
    margin-top: 6.6rem;
    
    p {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${colors.gray2}; /* Set the font color to black */
    }
`

const RentalStudent = () => {
    // 관심 리스트
    const [rentalData, setRentalData] = useState([]);

    const [slicedData, setSlicedData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 3; // 페이지당 항목 수
    const totalPageCount = Math.ceil((rentalData.length) / itemsPerPage); // 올림 값 계산
    const pageRange = 5;

    const pageListener = (page) => {
        setPage(page);
    };

    useEffect(() => {
        let isMounted = true; // 마운트 상태를 나타내는 변수

        const fetchData = async () => {
            try {
                const resultrentalData = await axios.get(`https://jsonplaceholder.typicode.com/users`);

                if (isMounted) {
                    setRentalData(resultrentalData.data)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();

        return () => {
            isMounted = false; // 컴포넌트가 언마운트될 때 변수를 false로 설정
        };
    }, []);

    useEffect(() => {
        // 현재 페이지에 해당하는 데이터 슬라이싱
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setSlicedData(rentalData.slice(startIndex, endIndex));
    }, [rentalData, page]);

    return (
        <div className="keemBody" style={{ marginBottom: '12rem' }}>
            <Link to="/myPageStaff">
                <button style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: `${colors.gray1}`,
                    padding: '1rem',
                    paddingLeft: '0',
                    marginTop: '5rem'
                }}><img src={iconBack} style={{ width: '2rem' }} />취소</button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <img src={iconHeart} alt="아이콘" style={{ width: '3.2rem' }} />
                <p style={{ fontSize: '3.2rem', fontWeight: '700' }}>대여 내역</p>
            </div>
            {rentalData.length > 0 &&
                <StyleGrid>
                    <p style={{ justifySelf: 'start', paddingLeft: '130px' }}>제품명</p>
                    <p>수량</p>
                    <p>대여 일시</p>
                </StyleGrid>
            }
            {rentalData.length > 0 &&
                <ListStudentRental data={slicedData} />
            }
            {rentalData.length > 0 &&
                <CustomPagination page={page} itemsPerPage={itemsPerPage} totalPageCount={totalPageCount} totalDataCount={rentalData.length} pageListener={pageListener} />
            }
        </div>
    )
}

export default RentalStudent;