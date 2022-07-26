import React, {useContext} from 'react';
import appContext from '../../context/appContext';
import Modal from '@mui/material/Modal';

type Props = {
  children: JSX.Element,
}

const ResuableModal = ({children}: Props)=> {
  const {modalVisibility, setModalVisibility} = useContext(appContext)
  function closeModal() {
    setModalVisibility(false)
  }

  return (
    <div data-testid="modal-container">
      <Modal
        open={modalVisibility}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onBackdropClick={closeModal}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <>
          {children}
        </>
      </Modal>
    </div>
  );
}

export default ResuableModal
