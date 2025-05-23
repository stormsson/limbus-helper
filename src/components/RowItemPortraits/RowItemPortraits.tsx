'use client';
import styles from './RowItemPortraits.module.css';
import { getSinnerIdentity } from '../../../data/roster';
import { useIdentitiesStore } from '../../stores/IdentitiesStore';

interface RowItemPortraitsProps {
  sinner_id: number;
}

export default function RowItemPortraits({ sinner_id }: RowItemPortraitsProps) {
  const { selectedIds } = useIdentitiesStore();

  return (
    <div className={styles.container}>
      {selectedIds.map((id) => {
        const [sinner_id_str, identity_id] = id.split('-');
        if (parseInt(sinner_id_str) !== sinner_id) {
            return null;
        }
        const sinnerIdentity = getSinnerIdentity(parseInt(sinner_id_str), parseInt(identity_id));
        
        // Only render if the ID matches this sinner
        if (sinnerIdentity) {
          return (
            <div key={`portrait-container-${id}`} className={styles.portraitContainer}>
              <div 
                key={`sinner-avatar-${id}`} 
                className={styles.portrait}
                style={{ 
                  backgroundImage: `url(${sinnerIdentity.image})`,
                }}
                title={sinnerIdentity.name}
              />
            </div>
          );
        }
        return null;
      }).filter(Boolean)}
    </div>
  );
} 