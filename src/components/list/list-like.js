import { styled } from "styled-components";
import ItemLike from "../listItem/item-like";


const StyleGrid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 8rem;
    margin-bottom: 4rem;
`

const ListLike = ({data}) => {

    return (
        <StyleGrid>
            {data.map((item, index) => {
                return(
                    <ItemLike 
                        key = {index}
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

export default ListLike;