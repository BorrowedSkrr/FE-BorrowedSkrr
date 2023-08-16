import colors from "../styles/colors";
import iconBack from '../images/icon_back.svg'
import { Link } from "react-router-dom";
import iconHeart from '../images/icon-line-heart.svg'
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../components/paging/pagination";
import ItemLike from "../components/listItem/item-like";
import ListLike from "../components/list/list-like";

const LikeStaff = () => {
    // 관심 리스트
    const [likeData, setLikeData] = useState([]);

    const [slicedData, setSlicedData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 8; // 페이지당 항목 수
    const totalPageCount = Math.ceil((likeData.length) / itemsPerPage); // 올림 값 계산
    const pageRange = 5;

    const pageListener = (page) => {
        setPage(page);
    };

    useEffect(() => {
        let isMounted = true; // 마운트 상태를 나타내는 변수

        const fetchData = async () => {
            try{
                const resultLikeData = await axios.get(`https://jsonplaceholder.typicode.com/users`);

                if (isMounted){
                    setLikeData(resultLikeData.data)
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
        setSlicedData(likeData.slice(startIndex, endIndex));
    }, [likeData, page]);

    return(
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
                <img src={iconHeart} alt="아이콘" style={{width: '3.2rem'}}/>
                <p style={{fontSize:'3.2rem', fontWeight:'700'}}>관심 목록</p>
            </div>
            {likeData.length > 0 && 
                <ListLike data={slicedData}/>
            }
            {likeData.length > 0 && 
                <CustomPagination page={page} itemsPerPage={itemsPerPage} totalPageCount={totalPageCount} totalDataCount={likeData.length} pageListener={pageListener} />
            }
        </div>
    )
}

export default LikeStaff;