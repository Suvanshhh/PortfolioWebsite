import React, { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaSearch,
  FaProjectDiagram,
  FaEnvelope,
  FaBook,
  FaImage,
  FaBriefcase,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { fileStructure } from "../data/fileStructure";

const sideNavOptions = [
  { id: "home", label: "Home", folder: "_hello", icon: <FaHome /> },
  { id: "search", label: "Search", folder: null, icon: <FaSearch /> },
  {
    id: "projects",
    label: "Projects",
    folder: "_projects",
    icon: <FaProjectDiagram />,
  },
  {
    id: "contact-me",
    label: "Contact Me",
    folder: "_contact-me",
    icon: <FaEnvelope />,
  },
  {
    id: "extracurriculars",
    label: "Extracurriculars",
    folder: "_extracurriculars",
    icon: <FaBook />,
  },
  {
    id: "image-gallery",
    label: "Image Gallery",
    folder: "_image-gallery",
    icon: <FaImage />,
  },
  { id: "works", label: "Works", folder: "_works", icon: <FaBriefcase /> },
];

function Sidebar({ selectedOption, onOptionSelect, onFileClick }) {
  const [folderWidth, setFolderWidth] = useState(240);
  const [isResizing, setIsResizing] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef(null);

  const getFilesForFolder = (folderName) => {
    const folder = fileStructure.find((f) => f.folder === folderName);
    return folder ? folder.files : [];
  };

  useEffect(() => {
    function handleMouseMove(e) {
      if (isResizing && sidebarRef.current) {
        const sidebarLeft = sidebarRef.current.getBoundingClientRect().left;
        const newWidth = e.clientX - sidebarLeft;
        if (newWidth < 80) {
          setIsCollapsed(true);
          setIsResizing(false);
        } else if (newWidth <= 500) {
          setFolderWidth(newWidth);
        }
      }
    }

    function handleMouseUp() {
      setIsResizing(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
    if (isCollapsed) {
      setFolderWidth(240); // reset to default width when opening
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      {/* Icon Sidebar */}
      <div className={styles.iconSidebar}>
        <ul className={styles.iconNav}>
          {sideNavOptions.map((option) => (
            <li
              key={option.id}
              className={`${styles.iconNavOption} ${
                selectedOption === option.id ? styles.activeIcon : ""
              }`}
              onClick={() => onOptionSelect(option.id)}
              title={option.label}
            >
              {option.icon}
            </li>
          ))}
        </ul>
      </div>

      {/* Folder Sidebar */}
      {!isCollapsed && (
        <div
          className={styles.folderSidebar}
          ref={sidebarRef}
          style={{ width: `${folderWidth}px` }}
        >
          {selectedOption && (
            <ul className={styles.fileList}>
              {getFilesForFolder(
                sideNavOptions.find((opt) => opt.id === selectedOption)?.folder
              ).map((file) => (
                <li
                  key={file}
                  className={styles.file}
                  onClick={() =>
                    onFileClick(
                      `${
                        sideNavOptions.find((opt) => opt.id === selectedOption)
                          ?.folder
                      }/${file}`
                    )
                  }
                >
                  {file}.jsx
                </li>
              ))}
            </ul>
          )}
          <div
            className={styles.resizer}
            onMouseDown={() => setIsResizing(true)}
            title="Drag to resize"
          />
        </div>
      )}

      {/* Collapse/Expand Toggle Button */}
      <div
        className={styles.toggleButton}
        onClick={toggleCollapsed}
        title={isCollapsed ? "Expand" : "Collapse"}
      >
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </div>
    </div>
  );
}

export default Sidebar;
