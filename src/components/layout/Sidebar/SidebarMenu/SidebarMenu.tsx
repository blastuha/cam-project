import React from 'react';
import { SIDEBAR_MENU } from '@utils/constants/';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import styles from './SidebarMenu.module.scss';

export const SidebarMenu = ({
  onLogout,
}: {
  onLogout: () => Promise<void>;
}) => {
  return (
    <div className={styles.sidebarMenu}>
      <Typography className={styles.menuTitle}>Меню</Typography>

      {SIDEBAR_MENU.map((navItem) => {
        const NavIcon = navItem.logo;
        return (
          <NavLink
            to={navItem.path}
            className={styles.navItem}
            key={navItem.title}
            onClick={navItem.title === 'Выйти' ? onLogout : undefined}
          >
            <NavIcon className={styles.navIcon} />
            <span className={styles.navText}>{navItem.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
