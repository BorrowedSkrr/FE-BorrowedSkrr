import { styled } from "styled-components";
import ItemCart from "../listItem/item-cart";


const StyleFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const ListCart = ({data, cartListener}) => {

    return (
        <StyleFlex>

            {data.map((item, index) => {
                return(
                    <ItemCart 
                        key = {index}
                        cartListener = {cartListener}
                        img = {'https://via.placeholder.com/150/92c952'}
                        name = {item.name }
                        num = {item.id} 
                        period = {item.id}
                        price = {parseInt(item.id, 10)}
                    />
                )
            })}
        </StyleFlex>
    )
}

export default ListCart;