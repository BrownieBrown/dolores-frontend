import React from "react";
import styles from "./style";
import { Navbar, Hero, Footer } from "./components";

const App = () => (
  <div className="overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div>
      <div>
        <Hero />
      </div>
    </div>
  </div>
);

export default App;
