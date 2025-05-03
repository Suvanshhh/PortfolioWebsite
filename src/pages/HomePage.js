import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabBar from '../components/TabBar';
import Editor from '../components/Editor';
import Terminal from '../components/Terminal';

import Introduction from '../components/files/Hello/Introduction';
import Bio from '../components/files/AboutMe/Bio';
import Project1 from '../components/files/Projects/Project1';
import Project2 from '../components/files/Projects/Project2';
import Project3 from '../components/files/Projects/Project3';
import EmailMe from '../components/files/ContactMe/EmailMe';

const fileContents = {
  '_hello/Introduction': Introduction,
  '_about-me/Bio': Bio,
  '_projects/Project1': Project1,
  '_projects/Project2': Project2,
  '_projects/Project3': Project3,
  '_contact-me/EmailMe': EmailMe,
};

function HomePage() {
  const [openTabs, setOpenTabs] = React.useState(['_hello/Introduction']);
  const [activeTab, setActiveTab] = React.useState('_hello/Introduction');
  const [selectedOption, setSelectedOption] = React.useState('home');

  const handleFileClick = (file) => {
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveTab(file);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleTabClose = (tab) => {
    const newTabs = openTabs.filter((t) => t !== tab);
    setOpenTabs(newTabs);
    if (activeTab === tab) {
      setActiveTab(newTabs.length ? newTabs[newTabs.length - 1] : null);
    }
  };

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Fira Code', monospace", flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
          onFileClick={handleFileClick}
        />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <TabBar
            openTabs={openTabs}
            activeTab={activeTab}
            onTabClick={handleTabClick}
            onTabClose={handleTabClose}
          />
          <Editor activeFile={activeTab} fileContent={activeTab ? fileContents[activeTab] : null} />
          <Terminal description={activeTab ? `// Description for ${activeTab.split('/')[1]}` : '// Open a file to see description'} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
