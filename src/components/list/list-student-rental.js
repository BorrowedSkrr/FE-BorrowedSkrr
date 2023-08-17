import ItemManageRental from "../listItem/item-manage-rental";

const ListStudentRental = ({data}) => {

    return (
        <div style={{marginTop:"16px", marginBottom:"32px", display:"flex", flexDirection:"column", gap:"8px"}}>
            {data.map((item, index) => {
                return(
                    <ItemManageRental 
                        key={index}
                        img={item.thumbnailUrl}
                        name={item.id}
                        num={item.id}
                        date='2023. 07. 06. ~ 2023. 08. 06.'
                    />
                )
            })}
        </div>
    )
}

export default ListStudentRental;