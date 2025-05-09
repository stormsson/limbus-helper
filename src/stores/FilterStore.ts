import { create } from 'zustand';

interface FilterState {
  nameFilter: string;
  affinities: string[];
  traits: string[];
  hasFilters: boolean;
  isExpanded: boolean;
  setNameFilter: (value: string) => void;
  setAffinities: (values: string[]) => void;
  setTraits: (values: string[]) => void;
  setIsExpanded: (value: boolean) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set, get) => ({
  nameFilter: '',
  affinities: [],
  traits: [],
  hasFilters: false,
  isExpanded: false,
  
  setNameFilter: (value: string) => {
    const affinities = get().affinities;
    const traits = get().traits;
    
    set({ 
      nameFilter: value,
      hasFilters: value !== '' || affinities.length > 0 || traits.length > 0
    });
  },
  
  setAffinities: (values: string[]) => {
    const nameFilter = get().nameFilter;
    const traits = get().traits;
    
    set({ 
      affinities: values,
      hasFilters: nameFilter !== '' || values.length > 0 || traits.length > 0
    });
  },
  
  setTraits: (values: string[]) => {
    const nameFilter = get().nameFilter;
    const affinities = get().affinities;
    
    set({ 
      traits: values,
      hasFilters: nameFilter !== '' || affinities.length > 0 || values.length > 0
    });
  },
  
  setIsExpanded: (value: boolean) => {
    set({ isExpanded: value });
  },
  
  clearFilters: () => set({ 
    nameFilter: '', 
    affinities: [], 
    traits: [],
    hasFilters: false
  })
})); 