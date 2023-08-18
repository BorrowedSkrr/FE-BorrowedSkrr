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
                        img={require(`../../util/${item.image}`)}
                        name = {item.name }
                        num = {item.count} 
                        period = {`${item.start_date} - ${item.end_date}`}
                        price = {parseInt(item.price, 10)}
                    />
                )
            })}
        </StyleFlex>
    )
}

export default ListCart;