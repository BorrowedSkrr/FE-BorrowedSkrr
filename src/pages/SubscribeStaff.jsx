import colors from "../styles/colors";
import iconBack from '../images/icon_back.svg'
import { Link } from "react-router-dom";
import iconMoney from '../images/icon-money.svg'

const SubScribeStaff = () => {
    return (
        <div className="keemBody" style={{marginBottom:'12rem'}}>
            <Link to="/myPageStaff">
                <button style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: `${colors.gray1}`,
                    padding: '1rem',
                    paddingLeft: '0',
                    marginTop: '5rem'
                }}><img src={iconBack} style={{width:'2rem'}}/>취소</button>
            </Link>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem'}}>
                <img src={iconMoney} alt="아이콘" style={{width: '3.2rem'}}/>
                <p style={{fontSize:'3.2rem', fontWeight:'700'}}>구독 내역</p>
            </div>
        </div>
    )
}

export default SubScribeStaff;