import React, { useState } from 'react';
import styles from './Terminal.module.css';

function Terminal({ description }) {
  const tabs = ['Problems', 'Output', 'Debug Console', 'Terminal'];
  const [activeTab, setActiveTab] = useState('Terminal');

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={styles.terminalContent}>
        <pre>{description}</pre>
      </div>
    </div>
  );
}

export default Terminal;
