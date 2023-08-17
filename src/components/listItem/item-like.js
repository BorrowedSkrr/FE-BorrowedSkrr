import { styled } from "styled-components";
import colors from "../../styles/colors";
import { useState } from "react";
import iconBoldHeart from '../../images/icon-bold-heart.svg'

const StyleItem = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2.5rem 1.6rem;
    background-color: #fff;
    border-radius: 0.417vw;
`

const DivRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 2rem;
    gap: 16px;
`

const DivTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const DivBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
`

const SubLeft = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 2px;

    & > :first-child {
        font-size: 1.6rem;
        color: ${colors.gray2};
        font-weight: 700;
    }

    & > :nth-child(2) {
        font-size: 2.4rem;
        color: ${colors.gray4};
        font-weight: 700;
    }
`

const DivNum = styled.div`
    height: 3.1rem;
    padding: 0 12px;
    line-height: 3.1rem;
    border-radius: 0.781vw;
    background: ${colors.gray1};
    color: ${colors.gray3};
    font-size: 1.5rem;
`

const ItemLike = (props) => {
    
    // 상품 이미지, 이름, 7일 가격, 30일 가격, 수량
    const {img, name, price7, price30, num} = props;

    return (
        <StyleItem>
            <img src={img} alt="제품 사진" style={{width:'13.3rem'}}/>
            <DivRight>
                <DivTop>
                    <p style={{color:`${colors.gray3}`, fontWeight: '700', fontSize:'2rem'}}>{name}</p>
                    <img src={iconBoldHeart} alt="하트" style={{width:'3.2rem'}}/>
                </DivTop>
                <div style={{width:'100%', height:'2px', background:`${colors.gray1}`}}></div>
                <DivBottom>
                    <SubLeft>
                        <p>7일 기준</p>
                        <p>{price7}</p>
                    </SubLeft>
                    <SubLeft>
                        <p>1달 기준</p>
                        <p>{price30}</p>
                    </SubLeft>
                    <DivNum>{num}개 남음</DivNum>
                </DivBottom>
            </DivRight>
        </StyleItem>
    );
}

export default ItemLike;