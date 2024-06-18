"use client";

import React, { useState, useEffect } from "react";
import styles from "./TypingBubble.module.css";

const TypingBubble: React.FC<{ text: string; typingSpeed?: number }> = ({
  text,
  typingSpeed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, typingSpeed]);

  return (
    <div
      className={`${styles.bubble} shadow-sm shadow-black dark:shadow-white`}
    >
      <p>
        {displayedText}
        <span className={styles.cursor}>|</span>
      </p>
    </div>
  );
};

export default TypingBubble;
