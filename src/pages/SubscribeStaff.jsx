import colors from "../styles/colors";
import iconBack from '../images/icon_back.svg'
import { Link } from "react-router-dom";

const SubScribeStaff = () => {
    return (
        <div>
            <Link to="/myPageStaff">
                <button style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: `${colors.gray1}`,
                    padding: '1rem',
                    paddingLeft: '0'
                }}><img src={iconBack} style={{width:'2rem'}}/>취소</button>
            </Link>
        </div>
    )
}

export default SubScribeStaff;