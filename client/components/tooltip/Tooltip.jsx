import React, { useState } from "react";
import styles from './tooltip.module.css';

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  }

  return (
      <div
        className={styles['tooltip-wrapper']}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {props.children}
        {active && (
          <div
            className={`${styles['tooltip-tip']} ${
              styles[props.direction || 'top']
            }`}
          >
            {props.content}
          </div>
        )}
      </div>
  );
};

export default Tooltip;