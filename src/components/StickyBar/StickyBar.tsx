'use client';
import { FiEye, FiEdit } from 'react-icons/fi';
import styles from './StickyBar.module.css';
import { useIdentitiesStore } from '../../stores/IdentitiesStore';
import { useRouter } from 'next/navigation';

import FilterBar from '../FilterBar/Filterbar';
import ShareMenu from '../ShareMenu/ShareMenu';

export default function StickyBar() {
  const { isViewingMode, selectedIds, setSelectionAndMode } = useIdentitiesStore();
  const router = useRouter();

  const handleEditSelection = () => {
    // Use the store method to set the selection in edit mode
    setSelectionAndMode(selectedIds, false);
    
    // Redirect to home page without query params
    router.push('/');
  };

  return (
    <div className={`${styles.stickyBar}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>


        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
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
        
        <div className={styles.rightSection}>
          {isViewingMode && (
            <button 
              className={styles.editButton} 
              onClick={handleEditSelection}
              title="Edit this selection"
            >
              <FiEdit /> Edit Selection
            </button>
          )}
          <ShareMenu />
        </div>
      </div>
      { !isViewingMode && (
        <FilterBar />
        )}
    </div>
  );
} 