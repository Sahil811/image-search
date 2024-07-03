import React, { useState } from 'react';
import styles from './TabNavigation.module.scss';

interface TabNavigationProps {
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Creative', 'Editorial'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className={styles.tabNavigation}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;