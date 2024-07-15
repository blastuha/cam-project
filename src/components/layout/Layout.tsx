import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';
import { Divider } from '@mui/material';

export const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <Header />
      <Divider sx={{ width: '100%' }} />
      <Outlet />
    </div>
  );
};
