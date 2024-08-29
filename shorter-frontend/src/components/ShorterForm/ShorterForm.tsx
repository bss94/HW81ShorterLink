import {TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import Grid from '@mui/material/Grid2';
import React, {useState} from 'react';

const ShorterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);

  }
  const OnFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    },1500)


  }

  return (
    <Grid container rowSpacing={3} component="form" sx={{my:4}} onSubmit={OnFormSubmit}
    >
      <Grid size={12}>
        <TextField
          required
          fullWidth
          type="url"
          label="Full URL"
          id="originalUrl"
          name="originalUrl"
          value={url}
          onChange={onUrlChange}
        />
      </Grid>
      <Grid size={12} display={"flex"} justifyContent="center">
        <LoadingButton size="large"
          type="submit"
          loading={loading}
          loadingPosition="center"
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default ShorterForm;