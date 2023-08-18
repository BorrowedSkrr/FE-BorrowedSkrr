import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { styled } from "styled-components";
import colors from "../../styles/colors";

const StyleModal = styled.div`
    width: 45.2rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.417vw;
    padding: 2rem;

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

const StyleButton = styled.button`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({text}) =>
        (text === '취소' ? colors.gray1 : '#FB5D5D')};
    color: ${({text}) =>
        (text === '취소' ? colors.gray6 : '#fff')};
    font-size: 2rem;
    font-weight: 700;
    border-radius: 0.417vw;
    padding: 2.2rem;
`

const StyleTitle = styled.p`
    color: ${colors.black};
    align-self: center;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 3.2rem;
    margin-bottom: 4.7rem;
`

const WithDrawModal = (props) => {
  return (
    <Modal
      {... props}
      centered
      backdrop="static"
      keyboard={false}
    >
      <StyleModal yleModal>
        <StyleTitle>정말 탈퇴하시려구요..? :(</StyleTitle>
        <div style={{display:'flex', flexDirection:'row', gap:'1.6rem'}}>
            <StyleButton text={'취소'} onClick={props.onHide}>취소</StyleButton>
            <StyleButton text={'삭제'} onClick={() => {
              props.handlemodalremove(props.name, props.state);
              props.onHide();
            }}>회원탈퇴</StyleButton>
        </div>
      </StyleModal>

    </Modal>
  );
}

export default WithDrawModal;