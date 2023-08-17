
import ItemStudentRental from "../listItem/item-student-rental";

const ListStudentRental = ({data}) => {

    return (
        <div style={{marginTop:"16px", marginBottom:"32px", display:"flex", flexDirection:"column", gap:"8px"}}>
            {data.map((item, index) => {
                return(
                    <ItemStudentRental
                        key={index}
                        img={'https://via.placeholder.com/150/92c952'}
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