import { CSSTransition } from 'react-transition-group'
import { ModalOverlay, ModalContent } from './modal.style'
import ReacDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

 export default function Modal({ show, onClose }) {
  return ReacDOM.createPortal((
    <CSSTransition
      in={show}
      timeout={200}
      unmountOnExit
      classNames="modal"
    >
      <ModalOverlay>
        <ModalContent className='app-modal-content'>
          <button onClick={onClose}>Close</button>
        </ModalContent>
      </ModalOverlay>
    </CSSTransition>
  ), modalRoot);
}