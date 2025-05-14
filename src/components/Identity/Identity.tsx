import { Sinner } from '../../../data/roster';
import styles from './Identity.module.css';
import { Identity as IdentityType, rarityImages } from '../../../data/roster';
import { useIdentitiesStore } from '../../stores/IdentitiesStore';


interface IdentityProps {
  identity_data: IdentityType;
  sinner: Sinner;
  tall?: boolean;
}

export default function Identity({ identity_data, sinner, tall = false }: IdentityProps) {
  const { isSelected, toggleSelection, isViewingMode } = useIdentitiesStore();
  const selected = isSelected(sinner.ID, identity_data.ID);

  const handleClick = () => {
    toggleSelection(sinner.ID, identity_data.ID);
  };

  return (
    <div 
      className={`${styles.container} ${selected && !isViewingMode ? styles.selected : ''} ${isViewingMode ? styles.viewingMode : ''}`} 
      data-rarity={identity_data.rarity} 
      data-sinner_id={sinner.ID}
      onClick={handleClick}
    >
      <div className={`${styles.imageContainer} ${tall ? styles.tall : ''}`}>
        <img
          src={identity_data.image}
          alt={identity_data.name}
          className={styles.img}
        />
        <img 
          className={styles.rarityImage} 
          src={rarityImages[identity_data.rarity as keyof typeof rarityImages]} 
          alt={identity_data.rarity} 
        />
      </div>

      <div className={styles.subtitle}>
        {identity_data.name}
      </div>
    </div>
  );
} 