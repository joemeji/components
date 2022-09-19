import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 13%);
  display: flex;
  align-items: center;
  justify-content: center;
  &.modal-enter .app-modal-content {
    opacity: 0;
    transform: translateY(-50px);
  }
  &.modal-enter-active .app-modal-content {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms, transform 200ms;
  }
  &.modal-exit .app-modal-content {
    opacity: 1;
  }
  &.modal-exit-active .app-modal-content {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 200ms, transform 200ms;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  background: #fff;
  min-height: 200px;
  width: 100%;
  max-width: 500px;
`;