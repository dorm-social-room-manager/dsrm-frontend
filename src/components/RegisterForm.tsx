import { Box, Divider, Grid } from '@mui/material';
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { RegisterButton } from './RegisterButton';
import { RegisterInput } from './RegisterInput';

interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
}

export function RegisterForm({ RegisterButtonFunction }: buttonFunctions) {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [roomNr, setRoomNr] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const handleEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };
  const handlePass = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPass(e.target.value);
  };
  const handleRoomNr = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRoomNr(e.target.value);
  };
  const handleLName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLName(e.target.value);
  };
  const handleFName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFName(e.target.value);
  };

  const minLenght = 1;

  return (
    <Box
      padding={0}
      boxShadow={'0px 0px 30px #ccc'}
      maxWidth={{
        desktop: 560,
        mobile: 330,
        tablet: 400,
      }}
      height={540}
      alignItems='center'
      justifyContent='center'
    >
      <Grid
        container
        paddingTop={{
          desktop: 8,
          mobile: 2,
          tablet: 8,
        }}
        alignItems='center'
        justifyContent='center'
        spacing={4}
      >
        <Grid
          item
          mobile={10}
          tablet={11}
        >
          <RegisterInput
            handleEmail={handleEmail}
            handleFName={handleFName}
            handleLName={handleLName}
            handlePass={handlePass}
            handleRoomNr={handleRoomNr}
          />
        </Grid>
        <Grid
          item
          mobile={11}
        >
          <Divider sx={{ width: 1 }} />
        </Grid>

        <Grid
          item
          mobile={6}
        >
          <RegisterButton
            RegisterButtonFunction={RegisterButtonFunction}
            isRegisterEnabled={
              !(
                fName.length < minLenght ||
                lName.length < minLenght ||
                roomNr.length < minLenght ||
                email.length < minLenght ||
                pass.length < minLenght
              )
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
