import Footer from '../components/Footer/Footer';
import MainGrid from '../components/MainGrid/MainGrid';
import StickyBar from '../components/StickyBar/StickyBar';
// we never import FilterBar here, it's only used in the StickyBar
import styles from './page.module.css';


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <StickyBar />
      <div className={styles.main}>
        <MainGrid />
      </div>
      <Footer />
    </>
  );
}
