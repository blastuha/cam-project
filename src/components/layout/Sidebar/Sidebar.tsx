import React from 'react';
import Divider from '@mui/material/Divider';
import styles from './Sidebar.module.scss';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import { CompanyIcon } from '@components/icons';

export const Sidebar = () => {
  return (
    <aside>
      <header className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <CompanyIcon />
        </div>
        <h1>Company Name</h1>
      </header>

      <Divider sx={{ width: '100%' }} />

      <SidebarMenu />
    </aside>
  );
};
