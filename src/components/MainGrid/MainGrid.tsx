'use client';

import styles from './MainGrid.module.css';
import RowItem from '../RowItem/RowItem';
import { sinners, Sinner } from '../../../data/roster';
import { useIdentitiesStore } from '@/stores/IdentitiesStore';
import { useFilterStore } from '@/stores/FilterStore';
import ViewingGrid from '../ViewingGrid/ViewingGrid';

export default function MainGrid() {
  const { isViewingMode, setRowUIVisibility } = useIdentitiesStore();
  const { isExpanded } = useFilterStore();

  // Determine wrapper class based on filter expansion state
  const wrapperClass = `${styles.wrapper} ${isExpanded ? styles.wrapper_expanded : ''}`;
  
  const handleExpandAll = () => {
    sinners.forEach((sinner: Sinner) => {
      setRowUIVisibility(sinner.ID, true);
    });
  };

  const handleCompactAll = () => {
    sinners.forEach((sinner: Sinner) => {
      setRowUIVisibility(sinner.ID, false);
    });
  };
  
  return (
    <div className={`${wrapperClass} ${isViewingMode ? styles.container_moveup : ''}`}>    
      <main className={`${styles.container} ${isViewingMode ? styles.container_moveup : ''}`}>
        {isViewingMode ? (
          <ViewingGrid />
        ) : (
          <>
            <div className={styles.toggleContainer}>
              <button 
                onClick={handleExpandAll}
                className={styles.toggleButton}
              >
                Expand All
              </button>
              <span className={styles.buttonSeparator}>|</span>
              <button 
                onClick={handleCompactAll}
                className={styles.toggleButton}
              >
                Compact All
              </button>
            </div>
            {sinners.map((sinner: Sinner, idx) => (
              <RowItem key={idx} sinner={sinner} />
            ))}
          </>
        )}
      </main>
    </div>
  );
} 