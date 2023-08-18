import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleButton = styled.button`
    width: 7.188vw;
    height: 2.292vw;
    background-color: ${colors.mainPurple};
    font-size: 0.833vw;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.417vw;
`

const ButtonLogin = () => {
    
    return (
        <>
            <Link to="/loginStaff">
                <StyleButton>
                    <p style={{color: `${colors.black}`}}>LOGIN</p>
                </StyleButton>
            </Link>
        </>

    )
}

export default ButtonLogin;