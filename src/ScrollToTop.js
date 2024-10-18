import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollButton}>
          ↑
        </button>
      )}
    </div>
  );
};

const styles = {
  scrollButton: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "50px",
    height: "50px",
    fontSize: "24px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "50%", // Circular shape
    cursor: "pointer",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect for depth
    transition: "background-color 0.3s ease",
  },
};

export default ScrollToTop;
