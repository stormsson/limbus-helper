'use client';
import { FiEye } from 'react-icons/fi';
import styles from './StickyBar.module.css';
import { useIdentitiesStore } from '../../stores/IdentitiesStore';
import Link from 'next/link';
import FilterBar from '../FilterBar/Filterbar';
import ShareMenu from '../ShareMenu/ShareMenu';

export default function StickyBar() {
  const { isViewingMode } = useIdentitiesStore();

  return (
    <div className={`${styles.stickyBar}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
        <a href="/" className={styles.homeLink}>
         <img src="/images/logo.png" alt="Logo" className={styles.logo} /> 
        </a>

          <h3>
            Limbus Team Sharing
          </h3>
          {isViewingMode && (
            <div className={styles.viewingMode}>
              <FiEye /> Viewing Mode
            </div>
          )}
        </div>
        
        <ShareMenu />
      </div>
      { !isViewingMode && (
        <FilterBar />
        )}
    </div>
  );
} 