import { Box, Typography } from '@mui/material';
import { ReservationsDialogProps } from './ReservationsDialogProps.types';
// import { useState } from 'react';

export function ReservationsDialog(props: ReservationsDialogProps) {
  const [open, setOpen] = useState(props.isOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Typography
        variant='subtitle1'
        component='div'
      >
        Testowy tekst
      </Typography>
    </Box>
  );
}
