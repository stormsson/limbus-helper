"use client"
import { useFilterStore } from "@/stores/FilterStore"
import { Input } from "@/components/UI/input"

import { Search,  X } from "lucide-react"
import styles from "./FilterBar.module.css"


export default function FilterBar() {
    const { 
      nameFilter, 
      affinities, 
      traits,

      setNameFilter, 
      setAffinities, 
      setTraits,

      clearFilters 
    } = useFilterStore();

    

    const removeNameFilter = () => {
        setNameFilter("")
    }

    const removeAffinityFilter = (affinity: string) => {
        setAffinities(affinities.filter(item => item !== affinity))
    }

    const removeTraitFilter = (trait: string) => {
        setTraits(traits.filter(item => item !== trait))
    }

    
    // Check if any filters are active
    const hasActiveFilters = nameFilter !== "" || affinities.length > 0 || traits.length > 0

    return (
        <div className={styles.container}>
          <div className={styles.filterBar}>
            {/* Top section with title, search, and clear button */}
            <div className={styles.topRow}>
              <h2 className={styles.title}>Filters</h2>
              <div className={styles.searchContainer}>
                <div className={styles.searchIcon}>
                  <Search className={styles.icon} />
                </div>
                <Input
                  type="text"
                  placeholder="Filter by name..."
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
    
              {/* Clear All button - only visible when filters are active */}
              {hasActiveFilters && (
                <button onClick={clearFilters} className={styles.clearButton} aria-label="Clear all filters">
                  <X className={styles.clearIcon} />
                  <span>Clear</span>
                </button>
              )}
            </div>
    
            {/* Active filter chips - always visible when filters are active */}
            {hasActiveFilters && (
              <div className={styles.activeFiltersRow}>
                <div className={styles.filterTags}>
                  {nameFilter && (
                    <button
                      className={`${styles.filterTag} ${styles.primaryTag}`}
                      onClick={removeNameFilter}
                      aria-label={`Remove name filter: ${nameFilter}`}
                    >
                      <span>Name: {nameFilter}</span>
                      <X className={styles.removeIcon} />
                    </button>
                  )}
    
                  {affinities.map((affinity) => (
                    <button
                      key={affinity}
                      className={`${styles.filterTag} ${styles.primaryTag}`}
                      onClick={() => removeAffinityFilter(affinity)}
                      aria-label={`Remove affinity filter: ${affinity}`}
                    >
                      <span>{affinity}</span>
                      <X className={styles.removeIcon} />
                    </button>
                  ))}
    
                  {traits.map((trait) => (
                    <button
                      key={trait}
                      className={`${styles.filterTag} ${styles.accentTag}`}
                      onClick={() => removeTraitFilter(trait)}
                      aria-label={`Remove trait filter: ${trait}`}
                    >
                      <span>{trait}</span>
                      <X className={styles.removeIcon} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )
} 




