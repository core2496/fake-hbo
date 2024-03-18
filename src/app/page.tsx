import styles from "./page.module.css";
import Navigation from "./Navigation";
import { WrapperSlider } from "@/components/wrapperSlider/WrapperSlider";
import { BANNER_SLIDER_CONTENT_LIST, CARD_MOVIE_SLIDER_CONTENT_LIST } from "@/models/movies";

export default function Home() {
  return (
    // <main className={styles.main}>

    <main className={styles.main}>
      <WrapperSlider data={{ contentBannerList: BANNER_SLIDER_CONTENT_LIST, type: "BANNER" }} />
      <section>
        <h2 className={styles.subtitle}>Utimas peliculas</h2>
        <WrapperSlider data={{ contentCardList: CARD_MOVIE_SLIDER_CONTENT_LIST, type: "CARD" }} />
      </section>
    </main>
  );
}
