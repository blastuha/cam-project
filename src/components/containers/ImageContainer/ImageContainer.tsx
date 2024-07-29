import React from 'react';
import styles from './ImageContainer.module.scss';

type ImageContainerProps = {
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  borderRadius?: string;
};

export const ImageContainer: React.FC<ImageContainerProps> = ({
  children,
  width,
  maxWidth,
  minWidth,
  height,
  borderRadius,
}) => {
  return (
    <div
      className={styles.imageContainer}
      style={{
        width: width ? width : '',
        maxWidth: maxWidth ? maxWidth : '',
        minWidth: minWidth ? minWidth : '',
        height: height ? height : '',
        borderRadius: borderRadius ? borderRadius : '',
      }}
    >
      {children}
    </div>
  );
};
