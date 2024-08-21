import clsx from "clsx";
import Link from "@docusaurus/Link";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Frontend Interview Only
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/rust"
          >
            Start Your Journey 💖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <HomepageHeader />
    </>
  );
}
