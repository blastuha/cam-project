import React from 'react';
import styles from './ContentCard.module.scss';

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
    className={`${styles.card} ${className ? styles[className] : ''}`}
    style={{ padding }}
  >
    {children}
  </div>
);

// Определяем подкомпоненты как свойства основного компонента
ContentCard.Header = ({ className, children, padding }) => (
  <div
    className={`${styles.cardHeader} ${className ? styles[className] : ''}`}
    style={{ padding }}
  >
    {children}
  </div>
);

ContentCard.HeaderTitle = ({ className, children }) => (
  <div
    className={`${styles.headerTitle} ${className ? styles[className] : ''}`}
  >
    {children}
  </div>
);

ContentCard.HeaderAction = ({ className, children }) => (
  <div
    className={`${styles.headerAction} ${className ? styles[className] : ''}`}
  >
    {children}
  </div>
);

ContentCard.Body = ({ className, children, padding }) => (
  <div
    className={`${styles.cardBody} ${className ? styles[className] : ''}`}
    style={{ padding }}
  >
    {children}
  </div>
);

ContentCard.Footer = ({ className, children, padding }) => (
  <div
    className={`${styles.cardFooter} ${className ? styles[className] : ''}`}
    style={{ padding }}
  >
    {children}
  </div>
);
