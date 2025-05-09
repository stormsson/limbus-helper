'use client';

import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiShare2, FiLink, FiCopy, FiCheck } from 'react-icons/fi';
import { useIdentitiesStore } from '@/stores/IdentitiesStore';
import { getSinnerIdentity } from '../../../data/roster';
import styles from './ShareMenu.module.css';

export default function ShareMenu() {
  const { selectedIds, isViewingMode } = useIdentitiesStore();
  const [copySuccess, setCopySuccess] = React.useState<boolean>(false);
  const [copyType, setCopyType] = React.useState<'link' | 'text' | null>(null);
  
  // Reset the copy success state after 2.5 seconds
  React.useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
        setCopyType(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  const handleShareLink = () => {
    try {
      if (selectedIds.length === 0) {
        alert('No selections to share');
        return;
      }
      
      // Create URL with selectedIds parameter
      const baseUrl = window.location.origin + window.location.pathname;
      const shareUrl = `${baseUrl}?selectedIds=${selectedIds.join(',')}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setCopySuccess(true);
          setCopyType('link');
        })
        .catch(err => {
          console.error('Failed to copy URL:', err);
          alert('Failed to copy URL: ' + shareUrl);
        });
    } catch (error) {
      console.error('Error sharing selections:', error);
    }
  };

  const handleCopyText = () => {
    try {
      if (selectedIds.length === 0) {
        alert('No selections to copy');
        return;
      }
      
      // Generate a text representation of selected identities
      const selectedIdentitiesText = selectedIds.map(id => {
        const [sinnerId, identityId] = id.split('-').map(Number);
        const identity = getSinnerIdentity(sinnerId, identityId);
        return identity ? `- ${identity.name}` : null;
      })
      .filter(Boolean)
      .join('\n');
      
      const textToCopy = `My Limbus Team:\n${selectedIdentitiesText}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopySuccess(true);
          setCopyType('text');
        })
        .catch(err => {
          console.error('Failed to copy text:', err);
          alert('Failed to copy team list');
        });
    } catch (error) {
      console.error('Error copying selections:', error);
    }
  };

  // Determine button content based on copy success state
  const renderButtonContent = () => {
    if (copySuccess) {
      return (
        <>
          <FiCheck className={styles.shareIcon} />
          <span>Copied!</span>
        </>
      );
    }
    return (
      <>
        <FiShare2 className={styles.shareIcon} />
        <span>Share</span>
      </>
    );
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild disabled={isViewingMode || copySuccess}>
        <button 
          className={`${styles.shareButton} ${copySuccess ? styles.successButton : ''}`}
          aria-label={copySuccess ? "Copied to clipboard" : "Share options"}
          disabled={isViewingMode}
          title={isViewingMode ? "Can't share in viewing mode" : "Share your selections"}
        >
          {renderButtonContent()}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className={styles.dropdownMenuContent} 
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item className={styles.dropdownMenuItem} onSelect={handleShareLink}>
            <FiLink className={styles.itemIcon} />
            <span>Share Link</span>
          </DropdownMenu.Item>
          
          <DropdownMenu.Item className={styles.dropdownMenuItem} onSelect={handleCopyText}>
            <FiCopy className={styles.itemIcon} />
            <span>Copy Team List</span>
          </DropdownMenu.Item>
          
          <DropdownMenu.Arrow className={styles.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
} 