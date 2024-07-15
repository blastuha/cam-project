import React from 'react';
import { SIDEBAR_MENU } from '@utils/constants/';
import { NavLink } from 'react-router-dom';
import styles from './SidebarMenu.module.scss';

export const SidebarMenu = () => {
  return (
    <div className={styles.sidebarMenu}>
      <h1 className={styles.menuTitle}>Меню</h1>

      {SIDEBAR_MENU.map((navItem) => {
        const NavIcon = navItem.logo;
        return (
          <NavLink to={navItem.path} className={styles.navItem}>
            <NavIcon className={styles.navIcon} />
            <span className={styles.navText}>{navItem.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
