import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // Import the styles
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(null); // Set to `null` initially to avoid SSR mismatch

  // Use useEffect to set theme after hydration
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
    document.documentElement.setAttribute(
      "data-theme",
      savedTheme ? "dark" : "light"
    );
  }, []);

  // Ensure no rendering happens until hydration is complete
  if (isDarkMode === null) {
    return null; // Prevent rendering until state is loaded
  }

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        {/* Spacer to push toggle to the right */}
        <div className={styles.spacer}></div>

        {/* Display current theme state */}
        <span className={styles.themeLabel}>
          {isDarkMode ? "Dark" : "Light"}
        </span>

        {/* Toggle Switch Container */}
        <div className={styles.toggleContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggle} // Trigger the toggle
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
