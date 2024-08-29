import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline} from '@mui/material';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer position="bottom-left"/>
    <CssBaseline/>
    <App />
  </StrictMode>,
)
