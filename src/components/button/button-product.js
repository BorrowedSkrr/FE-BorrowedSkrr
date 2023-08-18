import { styled } from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

const StyleButton = styled.button`
    width: 7vw;
    height: 2vw;
    font-size: 0.833vw;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.417vw;
`

const ButtonProduct = () => {
    return (
        <>
            {localStorage.getItem('id') === 1 && 
                <Link to="/product">
                    <StyleButton>
                        <p>Product</p>
                    </StyleButton>
                </Link>
            }
        </>
    )
}

export default ButtonProduct;