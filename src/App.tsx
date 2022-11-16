import React from "react";
import styles from "./style";
import { Navbar, Hero, Footer } from "./components";

const App = () => (
  <div className={`bg-blend-color ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
  </div>
);

export default App;
