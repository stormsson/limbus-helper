'use client'
import styles from './RowItem.module.css';
import { useState, useEffect } from 'react';
import Identity from '../Identity/Identity';
import RowItemPortraits from '../RowItemPortraits/RowItemPortraits';
import { useIdentitiesStore } from '../../stores/IdentitiesStore';
import { useFilterStore } from '../../stores/FilterStore';
import { Sinner, Identity as IdentityType} from '../../../data/roster';
// https://react-icons.github.io/react-icons/icons/fi/
import { FiChevronRight } from "react-icons/fi";
import { Oswald } from 'next/font/google';


const oswald = Oswald({
  subsets: ['latin'],
})

interface RowItemProps {
  sinner: Sinner;
}

function toggleOpen(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setOpen(o => !o);
}

export default function RowItem({ sinner }: RowItemProps) {
  const { selectedIds, isSelected, isViewingMode } = useIdentitiesStore();
  const { nameFilter, hasFilters } = useFilterStore();
  const [open, setOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Monitor selectedIds changes
  useEffect(() => {
    console.log('selectedIds changed in RowItem:', selectedIds);
    // Update the filtered IDs whenever selectedIds changes
    const filtered = selectedIds.filter(id => id.startsWith(`${sinner.ID}-`));
    console.log(`Filtered IDs for ${sinner.name}:`, filtered);
  }, [selectedIds, sinner.ID, sinner.name]);

  const handleClick = () => {
    if (isViewingMode) {
      return;
    }
    toggleOpen(setOpen);
  }

  useEffect(() => {
    if (selectedIds.length > 0 && !initialized) {
      
      const hasIdentitiesSelected = sinner.identities?.some((identity: IdentityType) => {
        // Generate the ID in the same format as used in the hook
        const id = `${sinner.ID}-${identity.ID}`;
        const selected = selectedIds.includes(id);
        return selected;
      });
      
      if (hasIdentitiesSelected) {
        setOpen(true);
      }
      
      setInitialized(true);
    }
  }, [selectedIds, sinner, initialized]);

  // Apply name filter if it exists
  const filterIdentities = (identities: IdentityType[] | undefined) => {
    if (!identities) return [];
    
    if (!nameFilter) return identities;
    
    const lowerFilter = nameFilter.toLowerCase();
    return identities.filter(identity => 
      identity.name.toLowerCase().includes(lowerFilter)
    );
  };

  // Get identities to display (all or just selected ones in viewing mode)
  const filteredIdentities = filterIdentities(sinner.identities);
  
  const visibleIdentities = isViewingMode 
    ? filteredIdentities.filter((identity: IdentityType) => isSelected(sinner.ID, identity.ID)) 
    : filteredIdentities;
  
  // Count how many matches for the filter
  const matchCount = filteredIdentities.length;
  
  // Auto-open when there are active filters and matches
  useEffect(() => {
    if (hasFilters && matchCount > 0) {
      setOpen(true);
    }
  }, [hasFilters, matchCount]);
  
  // If no identities to show in viewing mode, don't render the row
  if (isViewingMode && (!visibleIdentities || visibleIdentities.length === 0)) {
    return null;
  }
  
  // If name filter is active and no matches, don't show the row
  if (nameFilter && matchCount === 0) {
    return null;
  }

  return (
    <div id={`sinner-${sinner.ID}`} data-sinner_id={sinner.ID} className={`${styles.container} ${isViewingMode ? styles.viewingMode : ''}`} >
      <div onClick={handleClick} 
        className={`${styles.title} ${open ? styles.open : ''} ${oswald.className}`}>
        <FiChevronRight /> 
        {/* <img src={sinner.image} alt={sinner.name} className={styles.sinnerImage} /> */}
        <p>{sinner.name} </p>

        { !isViewingMode && (
          <RowItemPortraits sinner_id={sinner.ID} />
        )}

      </div>
      {open && (
        <div className={styles.innerContainer} >          
          {visibleIdentities.map((identity:IdentityType) => (
            <Identity key={identity.name} identity_data={identity} sinner={sinner} />
          ))}
        </div>
      )}
    </div>
  );
}