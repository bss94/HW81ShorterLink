import {TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import Grid from '@mui/material/Grid2';
import React, {useState} from 'react';

interface Props {
  onSubmit: (url: string) => void;
  loading: boolean;
}

const ShorterForm: React.FC<Props> = ({
  onSubmit,
  loading
}) => {
  const [url, setUrl] = useState<string>('');

  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);

  };
  const OnFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(url);
  };

  return (
    <Grid container rowSpacing={3} component="form" sx={{my: 4}} onSubmit={OnFormSubmit}
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
      <Grid size={12} display={'flex'} justifyContent="center">
        <LoadingButton size="large"
                       type="submit"
                       loading={loading}
                       loadingPosition="center"
                       variant="contained"
        >
          <span>Shorten</span>
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default ShorterForm;