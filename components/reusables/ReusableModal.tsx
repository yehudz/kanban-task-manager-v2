import {useContext} from 'react';
import appContext from '../../context/appContext';
import Modal from '@mui/material/Modal';

const ResuableModal = ()=> {
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
        <h1>Modal open</h1>
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </div>
  );
}

export default ResuableModal
