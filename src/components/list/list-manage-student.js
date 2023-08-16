import ItemManageStudent from "../listItem/item-manage-student"

const ListManageStudent = ({data}) => {
    const studentArray = [
        {
            'name':'김스컬', 
            'info':'1학년 2반 3번', 
            'date':'2023.08.03. 24:00:00'
        },
        {
            'name':'김스컬', 
            'info':'1학년 2반 3번', 
            'date':'2023.08.03. 24:00:00'
        },
        {
            'name':'김스컬', 
            'info':'1학년 2반 3번', 
            'date':'2023.08.03. 24:00:00'
        },
        {
            'name':'김스컬', 
            'info':'1학년 2반 3번', 
            'date':'2023.08.03. 24:00:00'
        }
    ]

    return (
        <div style={{marginTop:"34px", marginBottom:"32px", display:"flex", flexDirection:"column", gap:"8px"}}>
            {data.map((item, index) => {
                return(
                    <ItemManageStudent 
                        key={index}
                        name={item.name}
                        info={item.email}
                        date={item.website}
                    />
                )
            })}
        </div>
    )
}

export default ListManageStudent;