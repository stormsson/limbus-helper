import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IdentitiesState {
  selectedIds: string[];
  isViewingMode: boolean;
  rowsUIState: Record<number, boolean>;
  getIdentityId: (sinner_id: number, identity_id: number) => string;
  isSelected: (sinner_id: number, identity_id: number) => boolean;
  toggleSelection: (sinner_id: number, identity_id: number) => void;
  setRowUIVisibility: (sinner_id: number, open:boolean) => void;
  setIsViewingMode: (value: boolean) => void;
  setSelectedIdsFromUrl: (ids: string[]) => void;
  hydrateFromStorage: () => void;
  setSelectionAndMode: (ids: string[], isViewing: boolean) => void;
  generateShareUrl: () => string;
}

// Define storage keys
const EDIT_STORAGE_KEY = 'identities-storage';
const VIEW_STORAGE_KEY = 'identities-view';

// URL format optimization helpers
const parseOptimizedFormat = (urlIds: string): string[] => {
  // Handle new format: "1:10,7,4|2:5,11"
  if (urlIds.includes(':')) {
    const result: string[] = [];
    const sinners = urlIds.split('|');
    
    for (const sinner of sinners) {
      const [sinnerId, identities] = sinner.split(':');
      if (identities) {
        const identityIds = identities.split(',');
        for (const identityId of identityIds) {
          result.push(`${sinnerId}-${identityId}`);
        }
      }
    }
    
    return result;
  }
  
  // Handle legacy format: "1-10,2-5,2-11"
  return urlIds.split(',');
};

const generateOptimizedFormat = (selectedIds: string[]): string => {
  // Group by sinner ID
  const sinnerGroups: Record<string, string[]> = {};
  
  for (const id of selectedIds) {
    const [sinnerId, identityId] = id.split('-');
    if (!sinnerGroups[sinnerId]) {
      sinnerGroups[sinnerId] = [];
    }
    sinnerGroups[sinnerId].push(identityId);
  }
  
  // Generate optimized format
  const parts: string[] = [];
  for (const [sinnerId, identityIds] of Object.entries(sinnerGroups)) {
    parts.push(`${sinnerId}:${identityIds.join(',')}`);
  }
  
  return parts.join('|');
};

// Custom storage adapter to use different keys based on viewing mode
const createCustomStorage = () => {
  return {
    getItem: () => {
      // isViewingMode can't be reliably determined here yet, so get either value
      const editValue = localStorage.getItem(EDIT_STORAGE_KEY);
      
      if (editValue) {
        try {
          // Return just the edit value for normal use
          return Promise.resolve(editValue);
        } catch (e) {
          console.error('Failed to parse stored data:', e);
        }
      }
      
      return Promise.resolve(null);
    },
    setItem: (_: string, value: string) => {
      try {
        const parsedValue = JSON.parse(value);
        const isViewingMode = parsedValue.state.isViewingMode;
        
        // Use different keys based on mode
        const storageKey = isViewingMode ? VIEW_STORAGE_KEY : EDIT_STORAGE_KEY;
        localStorage.setItem(storageKey, JSON.stringify(parsedValue));
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
      }
      
      return Promise.resolve();
    },
    removeItem: () => {
      localStorage.removeItem(EDIT_STORAGE_KEY);
      localStorage.removeItem(VIEW_STORAGE_KEY);
      return Promise.resolve();
    }
  };
};

export const useIdentitiesStore = create<IdentitiesState>()(
  persist(
    (set, get) => ({
      selectedIds: [],
      isViewingMode: false,
      rowsUIState: {},
      
      getIdentityId: (sinner_id, identity_id) => {
        return `${sinner_id}-${identity_id}`;
      },
      
      isSelected: (sinner_id, identity_id) => {
        const id = get().getIdentityId(sinner_id, identity_id);
        return get().selectedIds.includes(id);
      },
      
      toggleSelection: (sinner_id, identity_id) => {
        // If in viewing mode, prevent toggling
        if (get().isViewingMode) {
          console.log('In viewing mode - selections cannot be changed');
          return;
        }
        
        const id = get().getIdentityId(sinner_id, identity_id);

        set((state) => ({
          selectedIds: state.selectedIds.includes(id)
            ? state.selectedIds.filter(item => item !== id)
            : [...state.selectedIds, id]
        }));
      },

      setRowUIVisibility: (sinner_id, open) => {
        console.log("setRowOpen", sinner_id)
        set((state) => ({
          rowsUIState: { ...state.rowsUIState, [sinner_id]: open }
        }));
      },

      
      setIsViewingMode: (value) => {
        set({ isViewingMode: value });
      },
      
      setSelectedIdsFromUrl: (ids) => {
        set({ 
          selectedIds: ids,
          isViewingMode: true
        });
      },

      setSelectionAndMode: (ids, isViewing) => {
        set({
          selectedIds: ids,
          isViewingMode: isViewing
        });
      },

      generateShareUrl: () => {
        const { selectedIds } = get();
        if (selectedIds.length === 0) return '';
        
        const baseUrl = typeof window !== 'undefined' 
          ? window.location.origin + window.location.pathname
          : '';
        const optimizedIds = generateOptimizedFormat(selectedIds);
        return `${baseUrl}?selectedIds=${optimizedIds}`;
      },
      
      // New function to manually hydrate from the correct storage
      hydrateFromStorage: () => {
        try {
          if (typeof window === 'undefined') return;
          
          // Check URL params first
          const urlParams = new URLSearchParams(window.location.search);
          const urlIds = urlParams.get('selectedIds');
          
          if (urlIds) {
            const stateData = {
              selectedIds: parseOptimizedFormat(urlIds),
              isViewingMode: true
            };
            // Update in memory values
            set(stateData);
            
            // Store this in the viewing storage
            const viewData = {
              state: stateData,
              version: 0
            };

            // update local storage values
            localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(viewData));
          } else {
            // No URL, use normal localStorage for editing
            const storedData = localStorage.getItem(EDIT_STORAGE_KEY);
            
            if (storedData) {
              try {
                const parsed = JSON.parse(storedData);

                set(parsed.state)
                
                // why did i put this ?
                // if (parsed.state && parsed.state.selectedIds) {
                //   set({ 
                //     selectedIds: parsed.state.selectedIds,
                //     isViewingMode: false
                //   });
                // }
              } catch (e) {
                console.error('Failed to parse stored data:', e);
              }
            }
          }
        } catch (e) {
          console.error('Error hydrating from storage:', e);
        }
      }
    }),
    {
      name: EDIT_STORAGE_KEY,
      storage: createJSONStorage(() => createCustomStorage()),
      /* 
        we use partialize to persist only the selectedIds and isViewingMode, skipping the functions in the storage
      */
      partialize: (state) => ({ selectedIds: state.selectedIds, isViewingMode: state.isViewingMode, rowsUIState: state.rowsUIState }),
      // Initialize on client side
      skipHydration: true
    }
  )
);

// Initialize from URL if needed
if (typeof window !== 'undefined') {
  // On initial load, hydrate the store
  setTimeout(() => {
    useIdentitiesStore.getState().hydrateFromStorage();
  }, 0);
} 