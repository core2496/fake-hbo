import LayoutStyles from "./layout.module.css";
import Link from "next/link";

interface Navigation {
  isMobile: boolean;
}
interface Props {
  data: Navigation;
}

function Navigation({ data }: Props) {
  return (
    <nav className={data.isMobile ? LayoutStyles.navContainerMobile : LayoutStyles.navContainer}>
      <Link href="#" className={`${LayoutStyles.navLink} ${LayoutStyles.navLinkSelected}`}>
        <p>Inicio</p>
        <div className={LayoutStyles.test}></div>
      </Link>
      <Link href="#" className={LayoutStyles.navLink}>
        <p>Series</p>
      </Link>
      <Link href="#" className={LayoutStyles.navLink}>
        <p>Peliculas</p>
      </Link>
      <Link href="#" className={LayoutStyles.navLink}>
        <p>HBO</p>
      </Link>
    </nav>
  );
}
export default Navigation;
