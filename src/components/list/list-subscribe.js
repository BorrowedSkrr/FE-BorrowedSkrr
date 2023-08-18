import { styled } from "styled-components";
import ItemCart from "../listItem/item-cart";
import ItemSubscribe from "../listItem/item-subscribe";


const StyleFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 8rem;
    margin-bottom: 4rem;
`

const ListSubscribe = ({data}) => {

    return (
        <StyleFlex>

            {data.map((item, index) => {
                return(
                    <ItemSubscribe 
                        key = {index}
                        // img = {'https://via.placeholder.com/150/92c952'}
                        img={require(`../../util/${item.image}`)}
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

export default ListSubscribe;