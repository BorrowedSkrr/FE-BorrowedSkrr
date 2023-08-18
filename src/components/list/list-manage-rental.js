import ItemManageRental from "../listItem/item-manage-rental";

const ListManageRental = ({data}) => {

    return (
        <div style={{marginTop:"16px", marginBottom:"32px", display:"flex", flexDirection:"column", gap:"8px"}}>
            {data.map((item, index) => {
                return(
                    <ItemManageRental 
                        key={index}
                        img={require(`../../util/${item.image}`)}
                        name={item.name}
                        num={item.count}
                        date={`${item.start_date} - ${item.end_date}`}
                        by={item.student}
                        explain={item.reason}
                    />
                )
            })}
        </div>
    )
}

export default ListManageRental;