import { styled } from "styled-components";
import ItemLike from "../listItem/item-like";
import ItemProduct from "../listItem/item-product";


const StyleGrid = styled.div`
    width: 59vw;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 8rem;
    margin-bottom: 4rem;
`

const ListProduct = ({data}) => {

    return (
        <StyleGrid>
            {data.map((item, index) => {
                return(
                    <ItemProduct 
                        key = {index}
                        id = {item.id}
                        img = {'https://via.placeholder.com/150/92c952'}
                        name = {item.name }
                        price7 = {item.id} 
                        price30 = {item.id}
                        num = {item.id}
                    />
                )
            })}
        </StyleGrid>
    )
}

export default ListProduct;