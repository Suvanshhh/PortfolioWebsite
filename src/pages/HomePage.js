import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabBar from '../components/TabBar';
import Editor from '../components/Editor';
import Terminal from '../components/Terminal';
import Introduction from '../components/files/Hello/Introduction';
import Bio from '../components/files/AboutMe/Bio';
import MeasureMate from '../components/files/Projects/MeasureMate';
import ChessGame from '../components/files/Projects/ChessGame';
import EmailMe from '../components/files/ContactMe/EmailMe';
import VartalaapAI from '../components/files/Projects/VartalaapAI';

const fileContents = {
  '_hello/Introduction': Introduction,
  '_about-me/Bio': Bio,
  '_projects/VartalaapAI': VartalaapAI,
  '_projects/ChessGame': ChessGame,
  '_projects/MeasureMate': MeasureMate,
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
