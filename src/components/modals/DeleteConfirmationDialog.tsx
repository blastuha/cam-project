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

// export default function DeleteConfirmationDialog({
//   isDialogOpen,
//   handleClose,
// }: {
//   isDialogOpen: boolean;
//   handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }) {
//   // const [open, setOpen] = React.useState(false);

//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   return (
//     <React.Fragment>
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button> */}
//       <Dialog
//         open={isDialogOpen}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{'Dialog'}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Вы действительно хотите удалить сотрудника ?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Не удалять</Button>
//           <Button onClick={handleClose} autoFocus>
//             Удалить
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
