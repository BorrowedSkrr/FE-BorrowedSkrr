import styled from "styled-components";
import colors from "../../styles/colors";

const StyleButton = styled.button`
    color: ${colors.black};
    background-color: ${({text}) => 
        text === '허용' ? colors.mainGreen : colors.gray1};
    border-radius: 0.417vw;
    font-size: 1.6rem;
    padding: 1.4rem 3.4rem;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;

const ButtonManageStudent = ({text, onClick}) => {
    return (
        <StyleButton text={text} onClick={() => onClick()}>
            {text}
        </StyleButton>
    )
};

export default ButtonManageStudent;