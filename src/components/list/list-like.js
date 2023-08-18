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
                        img={require(`../../util/${item.image}`)}
                        name = {item.name }
                        price7 = {item.priceWeek} 
                        price30 = {item.priceMonth}
                        num = {item.count}
                    />
                )
            })}
        </StyleGrid>
    )
}

export default ListLike;