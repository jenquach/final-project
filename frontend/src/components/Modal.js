import React, { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import styled from "styled-components"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmButton = styled.button`
background-color: #b3975d;
height: 40px;
border-radius: 2px;
margin-top: 15px;
margin-bottom: 20px;
width: 80%; 
font-size: large;
border: none;
color: #fff;
font-family: 'Short Stack', cursive;
cursor: pointer;
&:hover {
  background-color: #90763E;
}
&:focus {
  background-color: #90763E;
}
`

const PickupModal = ({ formattedDate }) => {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <div>
      <ConfirmButton onClick={handleOpen}>Confirm</ConfirmButton>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-description" variant="h6" component="h2" fontFamily="Nunito">
            Thank you for using our service!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} fontFamily="Nunito">
            Confirmed pick up by Bring at {formattedDate}. Please leave bags outside your door before 4pm.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default PickupModal