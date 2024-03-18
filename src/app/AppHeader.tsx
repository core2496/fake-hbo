// interface Props {
//   data: any;
// }

import LayoutStyles from "./layout.module.css";
import Link from "next/link";
import Navigation from "./Navigation";

function AppHeader() {
  return (
    <header className={LayoutStyles.headerContainer}>
      <div className={LayoutStyles.logoContainer}>
        <img
          loading="eager"
          alt=""
          src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png"
          sizes="24px"
          srcSet="https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=24&amp;f=webp 24w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=48&amp;f=webp 48w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=72&amp;f=webp 72w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=96&amp;f=webp 96w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=120&amp;f=webp 120w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=144&amp;f=webp 144w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=168&amp;f=webp 168w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=192&amp;f=webp 192w"
        />
      </div>
      <Navigation data={{ isMobile: false }} />
      <div className={LayoutStyles.actionsContainer}>
        <Link href="#">
          <img
            loading="eager"
            alt=""
            src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2F142d5e2b-0c8d-4886-8617-f9f58acfb4b8.png"
            srcSet="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=24&amp;f=webp 24w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=30&amp;f=webp 30w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=32&amp;f=webp 32w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=48&amp;f=webp 48w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=60&amp;f=webp 60w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=64&amp;f=webp 64w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=72&amp;f=webp 72w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=90&amp;f=webp 90w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd1c89ec8-a4a6-4acb-bb75-d5a9eca17880.png?h=96&amp;f=webp 96w"
            sizes="24px"
          />
        </Link>
        <Link href="#">
          <img
            loading="eager"
            alt=""
            src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2F9f8a43de-e478-4986-b6de-0a9b1225cb00.png"
            srcSet="https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=24&amp;f=webp 24w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=30&amp;f=webp 30w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=32&amp;f=webp 32w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=48&amp;f=webp 48w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=60&amp;f=webp 60w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=64&amp;f=webp 64w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=72&amp;f=webp 72w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=90&amp;f=webp 90w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F14%2Fd6e2e8b6-d39a-4391-916d-1079b419b60d.png?h=96&amp;f=webp 96w"
            sizes="24px"
          />
        </Link>
        <Link href="#">
          <img
            loading="lazy"
            alt=""
            sizes="32px"
            srcSet="https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=32&amp;f=webp 32w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=64&amp;f=webp 64w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=96&amp;f=webp 96w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=128&amp;f=webp 128w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=160&amp;f=webp 160w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=192&amp;f=webp 192w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=224&amp;f=webp 224w,https://images.cdn.prd.api.discomax.com/2023%2F4%2F5%2F7893cf0a-ce42-4bce-8ddd-36bc8d7a2d98.png?w=256&amp;f=webp 256w"
          />
        </Link>
      </div>
      <Navigation data={{ isMobile: true }} />
    </header>
  );
}
export default AppHeader;
