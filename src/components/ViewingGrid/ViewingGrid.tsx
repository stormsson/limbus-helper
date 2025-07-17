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

  // Group identities by sinner
  const identitiesBySinner = selectedIdentities.reduce((acc, { identity, sinner }) => {
    if (!acc[sinner.ID]) {
      acc[sinner.ID] = {
        sinner,
        identities: []
      };
    }
    acc[sinner.ID].identities.push(identity);
    return acc;
  }, {} as Record<number, { sinner: Sinner; identities: IdentityType[] }>);

  return (
    <div className={styles.container}>
      {Object.values(identitiesBySinner).map(({ sinner, identities }) => (
        <div key={sinner.ID} className={styles.sinnerSection}>
          <h3 className={styles.sinnerTitle}>{sinner.name}</h3>
          <div className={styles.grid}>
            {identities.map((identity) => (
              <div key={`${sinner.ID}-${identity.ID}`} className={styles.gridItem}>
                <Identity identity_data={identity} sinner={sinner} tall={true} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 