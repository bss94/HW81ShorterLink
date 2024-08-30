import ShorterForm from '../../components/ShorterForm/ShorterForm.tsx';
import {Typography} from '@mui/material';
import {useState} from 'react';
import {ILink} from '../../types.ts';
import ShorterLink from '../../components/ShorterLink/ShorterLink.tsx';
import axiosApi from '../../axiosApi.ts';
import {toast} from 'react-toastify';


const Shorter = () => {
  const [createdLink, setCreatedLink] = useState<ILink | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (url: string) => {
    try {
      setLoading(true);
      setCreatedLink(null);
      const created = await axiosApi.post<ILink>('/links', {originalUrl: url});
      if (created.status === 200) {
        setCreatedLink(created.data);
      }
      setLoading(false);
      toast.success('Link shorted successfully.');
    } catch (error) {
      toast.error('Link shorted failed: ');
    }
  };

  return (
    <>
      <Typography variant="h2" sx={{mt: 30, textAlign: 'center'}}>
        Shorten Your Link!
      </Typography>
      <ShorterForm onSubmit={onSubmit} loading={loading}/>
      {createdLink && <ShorterLink shortUrl={createdLink.shortUrl}/>}

    </>

  );
};

export default Shorter;