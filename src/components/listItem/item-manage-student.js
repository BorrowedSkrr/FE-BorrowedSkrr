import { styled } from "styled-components";
import colors from "../../styles/colors";
import ButtonManageStudent from "../button/button-manage-student";

const StyleDiv = styled.div`
    width: 100%;
    background-color: ${colors.gray4};
    border-radius: 0.417vw;
    padding: 1.2rem 1.6rem 1.2rem 3.2rem;
`;

const ItemManageStudent = ({name, info, date, isManaged, studentButtonListener}) => {
    // onClick 함수 정의
    const onClick = (state) => {
        studentButtonListener(name, state);
    };

    return (
        <StyleDiv className="keemContainer">
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', flexWrap:'wrap', gap:'1.042vw'}}>
                <p style={{fontSize:"2rem", fontWeight:"700", color:"white"}}>{name}</p>
                <p style={{fontSize:"1.6rem", fontWeight:"500"}}>{info}</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                {isManaged && 
                    <ButtonManageStudent text={'삭제'}/>
                }
                {!isManaged && 
                    <>
                        <p style={{color: `${colors.gray2}`, fontSize:"1.6rem", fontWeight:"500", whiteSpace:'nowrap', marginRight:"1.563vw"}}>요청 일시 | {date}</p>
                        <div style={{display:"flex", gap:"8px"}}>
                            <ButtonManageStudent text={'거절'} onClick={onClick}/>
                            <ButtonManageStudent text={'허용'} onClick={onClick}/>
                        </div>
                    </>
                }
            </div>
        </StyleDiv>
    );
}

export default ItemManageStudent;