import React from 'react';
import { SIDEBAR_MENU } from '@utils/constants/';
import styles from './SidebarMenu.module.scss';

export const SidebarMenu = () => {
  return (
    <div className={styles.sidebarMenu}>
      <h1 className={styles.menuTitle}>Menu</h1>
      {SIDEBAR_MENU.map((navItem) => {
        const NavIcon = navItem.logo;
        return (
          <nav className={styles.navItem}>
            <NavIcon className={styles.navIcon} />
            <span className={styles.navText}>{navItem.title}</span>
          </nav>
        );
      })}
    </div>
  );
};
