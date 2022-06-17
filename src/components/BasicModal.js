import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  


export default function BasicModal({open, handleOpen, handleClose,handleUpdate,todoTask,todoId}) {
  
    const [taskValue, settaskValue]=useState(todoTask);

    const Change=(e)=>{
      settaskValue(e.target.value);
    }
    const Update=(e)=>{
        handleUpdate(taskValue,todoId);
       handleClose();
    }
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <input value={taskValue} type="text" onChange={Change} />
          <button onClick={Update}>Update</button>
          <button onClick={handleClose}>Cancel</button>
           
          </Box>
        </Modal>
      </div>
    );
  }
  