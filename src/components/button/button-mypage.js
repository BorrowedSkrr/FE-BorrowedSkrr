import styled from "styled-components";
import colors from "../../styles/colors";

const StyleButton = styled.button`
    flex-grow: 1;
    color: #ffffff;
    background-color: ${colors.gray5};
    border: 2px solid ${colors.gray3};
    border-radius: 0.833vw;
    font-size: 2.8rem;
    padding-right: 8px;
    padding-top: 2.8rem;
    padding-bottom: 2.9rem;
    gap: 0.833vw;
`;

const ButtonMypage = ({ img, alt, text, onClick }) => {
    return (
        <StyleButton onClick={() => onClick()}>
            <img
                src={require(`../../images/${img}`)}
                alt={`${alt}`}
                style={{
                    height: "32px"
                }}
            />
            {text}
        </StyleButton>
    )
};

export default ButtonMypage