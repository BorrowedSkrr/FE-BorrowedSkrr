import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleItem = styled.div`
    display: flex;
    flex-direction: row;
`

const DivCenter = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left:2rem;
    margin-right:2rem;
    padding: 1rem;
`

const StyleImg = styled.img`
    width: 3rem;
    margin-right: 2rem;
`

const ItemSubscribe = (props) => {
    // 상품 이미지, 이름, 개수, 기간, 가격
    const {cartListener, img, name, num, period, price} = props;

    return (
        <StyleItem>
            <div style={{padding:'1rem', borderRadius:'0.417vw', backgroundColor:'#fff'}}>
                <img src={img} alt="제품 이미지" style={{width:'11.3rem'}}/>
            </div>
            <DivCenter>
                <div>
                    <p style={{marginBottom:'1.6rem',fontSize:'2rem', fontWeight:'700'}}>{name}</p>
                    <p style={{fontSize:'2rem', fontWeight:'700'}}>{num} 개</p>
                </div>
                <p style={{fontSize:'1.5rem', color:colors.gray2}}>{period}</p>
            </DivCenter>
            <p style={{alignSelf:'center', fontSize: '2.8rem', fontWeight: '500'}}>{price} 원</p>
        </StyleItem>
    )
}

export default ItemSubscribe;