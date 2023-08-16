import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleButton = styled.button`
    width: 7.031vw;
    height: 2.292vw;
    font-size: 0.833vw;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.417vw;
`

const ButtonProduct = () => {
    return (
        <StyleButton>
            <p>Product</p>
        </StyleButton>
    )
}

export default ButtonProduct;