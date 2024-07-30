import React from 'react';
import styles from './ContentCard.module.scss';
import clsx from 'clsx';

type CardProps = {
  className?: string;
  children: React.ReactNode;
  padding?: string;
};

export const ContentCard: React.FC<CardProps> & {
  Header: React.FC<CardProps>;
  Body: React.FC<CardProps>;
  Footer: React.FC<CardProps>;
  HeaderTitle: React.FC<CardProps>;
  HeaderAction: React.FC<CardProps>;
} = ({ className, children, padding }) => (
  <div
    className={clsx(styles.card, className && styles[className])}
    style={{ padding }}
  >
    {children}
  </div>
);

// Определяем подкомпоненты как свойства основного компонента
ContentCard.Header = ({ className, children, padding }) => (
  <div
    className={clsx(styles.cardHeader, className && styles[className])}
    style={{ padding }}
  >
    {children}
  </div>
);

ContentCard.HeaderTitle = ({ className, children }) => (
  <div className={clsx(styles.headerTitle, className && styles[className])}>
    {children}
  </div>
);

ContentCard.HeaderAction = ({ className, children }) => (
  <div className={clsx(styles.headerAction, className && styles[className])}>
    {children}
  </div>
);

ContentCard.Body = ({ className, children, padding }) => (
  <div
    className={clsx(styles.cardBody, className && styles[className])}
    style={{ padding }}
  >
    {children}
  </div>
);

ContentCard.Footer = ({ className, children, padding }) => (
  <div
    className={clsx(styles.cardFooter, className && styles[className])}
    style={{ padding }}
  >
    {children}
  </div>
);
