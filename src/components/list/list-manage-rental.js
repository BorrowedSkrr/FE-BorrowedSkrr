import ItemManageRental from "../listItem/item-manage-rental";

const ListManageRental = ({data}) => {

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
                        by='김스컬 (1학년 2반)'
                    />
                )
            })}
        </div>
    )
}

export default ListManageRental;