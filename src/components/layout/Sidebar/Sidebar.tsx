import React from 'react';
import Divider from '@mui/material/Divider';
import styles from './Sidebar.module.scss';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import { CompanyIcon } from '@components/icons';
import { logOut } from '@api/logOut';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    <aside>
      <header className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <CompanyIcon />
        </div>
        <h1>Company Name</h1>
      </header>

      <Divider sx={{ width: '100%' }} />

      <SidebarMenu onLogout={handleLogout} />
    </aside>
  );
};
