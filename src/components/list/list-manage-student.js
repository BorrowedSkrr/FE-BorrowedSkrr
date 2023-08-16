import ItemManageStudent from "../listItem/item-manage-student"

const ListManageStudent = ({data, studentButtonListener}) => {
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
                        studentButtonListener={studentButtonListener}
                        name={item.name}
                        info={item.email}
                        date={item.website}
                        isManaged={false}
                    />
                )
            })}
        </div>
    )
}

export default ListManageStudent;