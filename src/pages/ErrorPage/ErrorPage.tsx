import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={styles.gradient}>
      <div className={styles.container}>Error</div>
      <div className={styles.box}>
        <div className={styles.circle_s}>
          <div className={styles.circle_m}>
            <div className={styles.circle_l}>
              <div className={styles.circle_xl}>
                <div className={styles.circle_xs}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
