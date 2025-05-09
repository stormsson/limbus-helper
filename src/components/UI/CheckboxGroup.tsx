import { Checkbox } from "@/components/UI/checkbox"
import { Label } from "@/components/UI/label"
import styles from "./CheckboxGroup.module.css"

interface CheckboxGroupProps {
  title: string
  items: string[]
  selectedItems: string[]
  onChange: (value: string) => void
  horizontal?: boolean
}

export function CheckboxGroup({ title, items, selectedItems, onChange, horizontal = false }: CheckboxGroupProps) {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.filterGroupTitle}>{title}</h3>
      <div className={`${styles.checkboxList} ${horizontal ? styles.horizontal : ""}`}>
        {items.map((item) => (
          <div key={item} className={styles.checkboxItem}>
            <Checkbox
              id={`${title.toLowerCase()}-${item}`}
              checked={selectedItems.includes(item)}
              onCheckedChange={() => onChange(item)}
              className={styles.checkbox}
            />
            <Label htmlFor={`${title.toLowerCase()}-${item}`} className={styles.checkboxLabel}>
              {item}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}
