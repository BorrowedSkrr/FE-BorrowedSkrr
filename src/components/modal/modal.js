import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleModal = styled.div`
    width: 21.458vw;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.417vw;
    padding: 1.042vw;

    /* 최상단 위치 */
    z-index: 999;
    
    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyleButton = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({text}) =>
        (text === '취소' ? colors.gray1 : '#FB5D5D')};
    color: ${({text}) =>
        (text === '취소' ? colors.gray6 : '#fff')};
    font-size: 1.042vw;
    font-weight: 700;
    padding: 1.146vw 0;
    border-radius: 0.417vw;
`

const StyleTitle = styled.p`
    color: ${colors.black};
    align-self: center;
    font-size: 1.042vw;
    font-weight: 700;
    margin-top: 1.667vw;
    margin-bottom: 2.708vw;
`

const Modal = ({isReject, name}) => {
    return (
        <StyleModal>
            {console.log(isReject)}
            {isReject && <StyleTitle>'{name}'님의 허용 요청을 거절할까요?</StyleTitle>}
            {!isReject && <StyleTitle>'{name}'님의 학생정보를 삭제할까요?</StyleTitle>}
            <div style={{display:'flex', flexDirection:'row', gap:'0.833vw'}}>
                <StyleButton text={'취소'}>취소</StyleButton>
                {isReject && <StyleButton text={'거절'}>거절</StyleButton>}
                {!isReject && <StyleButton text={'삭제'}>삭제</StyleButton>}
            </div>
        </StyleModal>
    )
};

export default Modal;