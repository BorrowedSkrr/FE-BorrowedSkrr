import { styled } from "styled-components";
import colors from "../../styles/colors";
import ButtonManageStudent from "../button/button-manage-student";

const StyleDiv = styled.div`
    width: 100%;
    background-color: ${colors.gray4};
    border-radius: 0.417vw;
    padding: 1.2rem 1.6rem 1.2rem 3.2rem;
`;

const ItemManageStudent = (props) => {
    const {name, info, date} = props;

    return (
        <StyleDiv className="keemContainer">
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', flexWrap:'wrap', gap:'1.042vw'}}>
                <p style={{fontSize:"2rem", fontWeight:"700", color:"white"}}>{name}</p>
                <p style={{fontSize:"1.6rem", fontWeight:"500"}}>{info}</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <p style={{color: `${colors.gray2}`, fontSize:"1.6rem", fontWeight:"500", whiteSpace:'nowrap'}}>요청 일시 | {date}</p>
                <div style={{display:"flex", marginLeft:"1.563vw", gap:"8px"}}>
                    <ButtonManageStudent text={'거절'}/>
                    <ButtonManageStudent text={'허용'}/>
                </div>
            </div>
        </StyleDiv>
    );
}

export default ItemManageStudent;