import ShorterForm from '../../components/ShorterForm/ShorterForm.tsx';
import {Typography} from '@mui/material';

const Shorter = () => {
  return (
    <>
      <Typography variant="h2" sx={{mt: 30,textAlign:"center"}}>
        Shorten Your Link!
      </Typography>
    <ShorterForm/>

    </>

  );
};

export default Shorter;