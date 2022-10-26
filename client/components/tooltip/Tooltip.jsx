import React, { useState } from "react";
import styles from './tooltip.module.css'

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 50);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  }

  return (
    <div
      className={styles['tooltip-wrapper']}
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`${styles['tooltip-tip']} ${styles[props.direction || 'top']}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;