import Grid from '@mui/material/Grid2';
import {Link, Typography} from '@mui/material';
import {API_URL} from '../../constants.ts';
import React from 'react';

interface Props {
  shortUrl: string,
}

const ShorterLink: React.FC<Props> = ({
  shortUrl
}) => {
  return (
    <Grid container sx={{my: 2}}>
      <Grid size={12}>
        <Typography variant="h6" sx={{mt: 2, textAlign: 'center'}}>
          Your link now looks like this :
        </Typography>
        <Link href={`${API_URL}/${shortUrl}`}>
          <Typography variant="h4" sx={{mt: 2, textAlign: 'center'}}>
            {API_URL + '/' + shortUrl}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ShorterLink;