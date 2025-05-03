import React from 'react';
import styles from './Editor.module.css';

function Editor({ activeFile, fileContent }) {
  if (!activeFile) {
    return <div className={styles.editor}>Open a file to view its content</div>;
  }

  return (
    <div className={styles.editor}>
      <pre className={styles.codeBlock}>
        {fileContent}
      </pre>
    </div>
  );
}

export default Editor;
