import styles from './ViewingGrid.module.css';
import { getSinnerIdentity, sinners, Identity as IdentityType, Sinner } from '../../../data/roster';
import { useIdentitiesStore } from '../../stores/IdentitiesStore';
import Identity from '../Identity/Identity';

export default function ViewingGrid() {
  const { selectedIds } = useIdentitiesStore();

  // Map selectedIds to identity objects with their Sinner
  const selectedIdentities = selectedIds
    .map(id => {
      const [sinner_id, identity_id] = id.split('-').map(Number);
      const identity = getSinnerIdentity(sinner_id, identity_id) as IdentityType | undefined;
      const sinner = sinners.find(s => s.ID === sinner_id) as Sinner | undefined;
      return identity && sinner ? { identity, sinner, sinner_id } : null;
    })
    .filter((item): item is { identity: IdentityType; sinner: Sinner; sinner_id: number } => !!item)
    .sort((a, b) => a.sinner_id - b.sinner_id);

  return (
    <div className={styles.grid}>
      {selectedIdentities.map(({ identity, sinner }) => (
        <div key={`${sinner.ID}-${identity.ID}`} className={styles.gridItem}>
          <Identity identity_data={identity} sinner={sinner} tall={true} />
        </div>
      ))}
    </div>
  );
} 