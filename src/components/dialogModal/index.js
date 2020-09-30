import React from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";

const DialogModal = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Please register or sign in to write a review!</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
