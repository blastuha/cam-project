import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteConfirmationDialog({
  isDialogOpen,
  handleClose,
}: {
  isDialogOpen: boolean;
  handleClose: (confirm: boolean) => void;
}) {
  return (
    <React.Fragment>
      <Dialog
        open={isDialogOpen}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Удаление сотрудника</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить сотрудника?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Не удалять</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
