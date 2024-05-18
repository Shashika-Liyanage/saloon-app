import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, Grid, Typography, Button, Stack  } from '@mui/material';
import React from 'react'
import { useState } from 'react';


const UpdateHair = () => {
    const [open, setOpen] = useState(false);
    const [showHaircutModal, setShowHaircutModal] = useState(false);

    // Function to handle button click and open the modal
    const handleHairCutButtonClick = () => {
      setShowHaircutModal(true);
    };
  
    // Function to close the modal
    const handleCloseModal = () => {
      setShowHaircutModal(false);
    };
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
    <React.Fragment>

    </React.Fragment>
    
    
    
    </>
  )
}

export default UpdateHair