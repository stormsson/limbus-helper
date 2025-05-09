

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/UI/checkbox';
import styles from './page.module.css';

import FilterBar from '@/components/FilterBar/Filterbar';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.main}>
        <FilterBar />
      </div>

    </>
  );
}
