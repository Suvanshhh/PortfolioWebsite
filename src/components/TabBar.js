import React from "react";
import styles from "./TabBar.module.css";

function TabBar({ openTabs, activeTab, onTabClick, onTabClose }) {
  return (
    <div className={styles.tabBar}>
      {openTabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
        >
          <span onClick={() => onTabClick(tab)} className={styles.tabLabel}>
            {tab.split("/")[1]}.jsx
          </span>
          <button onClick={() => onTabClose(tab)} className={styles.closeBtn}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default TabBar;
