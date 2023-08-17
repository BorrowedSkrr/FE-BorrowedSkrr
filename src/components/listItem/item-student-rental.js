import { styled } from "styled-components";
import colors from "../../styles/colors";
import { useState } from "react";

const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 130px;
    margin-top: 1rem;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    background-color: ${colors.gray1};
    justify-self: stretch;
    padding: 12px 20px;
    border-radius: 0.208vw;

    p{
        font-size: 1.6rem;
        white-space: nowrap;
        margin-top:4px;
        margin-right:20px;
        color: ${colors.black};
    }
    div{
        color: #000;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.55rem;
    }
`;

const StyleGrid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 6fr 1fr 3fr;
    justify-items:center;
    align-items: center;
    background-color: #fff;
    border-radius: 0.417vw;
    padding: 1rem 2rem 2rem 2rem;
    cursor: pointer;

    p {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${colors.black}; /* Set the font color to black */
    }
`

const ItemStudentRental = (props) => {
    // 제품 이미지 url, 제품명, 수량, 대여 일시, 사유
    const {img, name, num, date, reason} = props;
    const [isStyleDivVisible, setIsStyleDivVisible] = useState(false); // 가시성 상태

    const toggleStyleDiv = () => {
        setIsStyleDivVisible(!isStyleDivVisible); // 가시성 토글
    };

    return (
        <StyleGrid onClick={toggleStyleDiv}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifySelf:'start'}}>
                <img 
                    style={{width:'113px', height:'113px'}}
                    src={img}
                    alt='제품 이미지'
                />
                <p style={{marginLeft:'3rem', fontWeight: '700'}}>{name}</p>
            </div>
            <div style={{fontSize: '2rem'}}>
                <p style={{fontWeight: '700'}}>{num}개</p>
            </div>
            <div>
                <p style={{color:`${colors.gray4}`}}>{date}</p>
            </div>
            <StyleDiv>
                <p style={{fontWeight:'700'}}>사유</p>
                <div>Lorem ipsum dolor sit amet consectetur. Mattis netus a ut suspendisse neque. Blandit semper porttitor nunc adipiscing gravida faucibus proin nunc. Eu a sit placerat amet non semper mauris iaculis. </div>
            </StyleDiv>
        </StyleGrid>
    );
}

export default ItemStudentRental;