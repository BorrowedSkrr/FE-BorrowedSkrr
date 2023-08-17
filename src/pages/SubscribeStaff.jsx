import colors from "../styles/colors";
import iconBack from '../images/icon_back.svg'
import { Link } from "react-router-dom";
import iconMoney from '../images/icon-money.svg'
import ListSubscribe from "../components/list/list-subscribe";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../components/paging/pagination";

const SubScribeStaff = () => {
    // 장바구니 리스트
    const [subscribeData, setSubscribeData] = useState([]);

    const [slicedData, setSlicedData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5; // 페이지당 항목 수
    const totalPageCount = Math.ceil((subscribeData.length) / itemsPerPage); // 올림 값 계산
    const pageRange = 5;

    const pageListener = (page) => {
        setPage(page);
    };

    useEffect(() => {
        let isMounted = true; // 마운트 상태를 나타내는 변수

        const fetchData = async () => {
            try{
                const resultSubscribeData = await axios.get(`https://jsonplaceholder.typicode.com/users`);

                if (isMounted){
                    setSubscribeData(resultSubscribeData.data)
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

    useEffect(() => {
        // 현재 페이지에 해당하는 데이터 슬라이싱
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setSlicedData(subscribeData.slice(startIndex, endIndex));
    }, [subscribeData, page]);

    return (
        <div className="keemBody" style={{marginBottom:'12rem'}}>
            <Link to="/myPageStaff">
                <button style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: `${colors.gray1}`,
                    padding: '1rem',
                    paddingLeft: '0',
                    marginTop: '5rem'
                }}><img src={iconBack} style={{width:'2rem'}}/>취소</button>
            </Link>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem'}}>
                <img src={iconMoney} alt="아이콘" style={{width: '3.2rem'}}/>
                <p style={{fontSize:'3.2rem', fontWeight:'700'}}>구독 내역</p>
            </div>
            
            {subscribeData.length > 0 && 
                <ListSubscribe data={slicedData} />
            }
            {subscribeData.length > 0 && 
                <CustomPagination page={page} itemsPerPage={itemsPerPage} totalPageCount={totalPageCount} totalDataCount={subscribeData.length} pageListener={pageListener} />
            }
        </div>
    )
}

export default SubScribeStaff;