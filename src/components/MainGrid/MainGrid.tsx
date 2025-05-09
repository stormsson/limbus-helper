'use client';

import styles from './MainGrid.module.css';
import RowItem from '../RowItem/RowItem';
import { sinners, Sinner } from '../../../data/roster';
import { useIdentitiesStore } from '@/stores/IdentitiesStore';
import { useFilterStore } from '@/stores/FilterStore';


export default function MainGrid() {
  const { isViewingMode } = useIdentitiesStore();
  const { isExpanded } = useFilterStore();



  

  // Determine wrapper class based on filter expansion state
  const wrapperClass = `${styles.wrapper} ${isExpanded ? styles.wrapper_expanded : ''}`;
  
  return (
    <div className={`${wrapperClass} ${isViewingMode ? styles.container_moveup : ''}`}>    
      <main className={`${styles.container} ${isViewingMode ? styles.container_moveup : ''}`}>
        {sinners.map((sinner: Sinner, idx) => (
          <RowItem key={idx} sinner={sinner} />
        ))}
      </main>
    </div>
  );
} 