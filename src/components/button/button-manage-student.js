import styled from "styled-components";
import colors from "../../styles/colors";

const StyleButton = styled.button`
    color: ${colors.black};
    background-color: ${({text}) => {
        if (text === "허용") {
            return colors.mainGreen;
        } else if (text === "거절") {
            return colors.gray1;
        } else {
            return colors.gray3;
        }
    }};
    border-radius: 0.417vw;
    font-size: 1.6rem;
    padding: 1.4rem 3.4rem;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;

const ButtonManageStudent = ({text, onClick}) => {
    return (
        <StyleButton text={text} onClick={() => onClick(text)}>
            {text}
        </StyleButton>
    )
};

export default ButtonManageStudent;