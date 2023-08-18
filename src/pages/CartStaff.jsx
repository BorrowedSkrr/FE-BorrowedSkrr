import colors from "../styles/colors";
import iconBack from '../images/icon_back.svg'
import { Link } from "react-router-dom";
import iconShopBag from '../images/icon-shop-bag.svg'
import ItemCart from "../components/listItem/item-cart";
import { useEffect, useState } from "react";
import axios from "axios";
import ListCart from "../components/list/list-cart";
import { styled } from "styled-components";
import Api from "../api";
import CartData from "../util/wantProduct";

const StyleButton = styled.button`
    padding: 2.2rem 6.4rem;
    border-radius: 0.417vw;
    background: ${colors.mainGreen};
    color: ${colors.black};
    font-size: 2rem;
    font-weight: 700;
    align-self: center;
    margin-top: 19vh;
    margin-bottom: 18vh;
`

const CartStaff = () => {
    // 장바구니 리스트
    const [cartData, setCartData] = useState([]);
    // 선택한 제품 가격
    const [totalPrice, setTotalPrice] = useState(0);
    // 선택된 개수
    const [checkNum, setCheckNum] = useState(0);

    useEffect(() => {
        // let isMounted = true; // 마운트 상태를 나타내는 변수

        // const fetchData = async () => {
        //     try{
        //         const resultcartData = await axios.get(`https://jsonplaceholder.typicode.com/users`);

        //         if (isMounted){
        //             setCartData(resultcartData.data)
        //         }
        //     } catch (error){
        //         console.log(error);
        //     }
        // };
        // fetchData();

        // return () => {
        //     isMounted = false; // 컴포넌트가 언마운트될 때 변수를 false로 설정
        // };
        setCartData(CartData);
    }, []);

    const cartListener = (price, isCheck) => {
        if (isCheck) {
            setCheckNum(prevCheckNum => prevCheckNum + 1);
        } else {
            setCheckNum(prevCheckNum => prevCheckNum - 1);
        }
        
        setTotalPrice(prevTotalPrice => {
            if (checkNum === 0) {
                return 0;
            }
            return isCheck ? prevTotalPrice + price : prevTotalPrice - price;
        });
    }

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
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem', marginBottom:'8rem'}}>
                <img src={iconShopBag} alt="아이콘" style={{width: '3.2rem'}}/>
                <p style={{fontSize:'3.2rem', fontWeight:'700'}}>장바구니</p>
            </div>
            <ListCart data={cartData} cartListener={cartListener}/>
            <div style={{width:'100%', height:'2px', background:`${colors.gray5}`, marginTop:'4.6rem'}}></div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:'5.2rem', justifyContent:'space-between', alignItems:'center', marginTop:'3.2rem'}}>
                <p style={{fontSize:'2.4rem'}}>총 내역</p>
                <p style={{fontSize:'3.2rem'}}>{totalPrice} 원</p>
            </div>
            <StyleButton>결제하기</StyleButton>
        </div>
    )
}
export default CartStaff;