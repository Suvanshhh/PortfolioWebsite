import React, { useState } from 'react';
import styles from './BottomPanel.module.css';

function BottomPanel({ description }) {
  const tabs = ['Terminal', 'Problems', 'Debug', 'Output'];
  const [activeTab, setActiveTab] = useState('Terminal');

  return (
    <div className={styles.bottomPanel}>
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
      <div className={styles.content}>
        {/* For now, all tabs show the same description */}
        <pre>{description}</pre>
      </div>
    </div>
  );
}

export default BottomPanel;
