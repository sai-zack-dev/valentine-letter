import { motion } from "framer-motion";
import "../styles/letter.scss";
import { useState } from "react";

function Letter({ question, onYesClick, open }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseOver = () => {
    const newX = Math.random() * 500 - 100; // Random X movement
    const newY = Math.random() * 200 - 50;  // Random Y movement
    setPosition({ top: newY, left: newX });
  };
  return (
    <motion.div
      className="letter"
      style={{ translateY: open ? -120 : 0, height: open ? 200 : 150 }}
    >
      <div style={{ opacity: open ? 1 : 0 }}>
        <p className="question">{question}</p>
        <div className="btn-wrap">
          <button className="yes" onClick={onYesClick}>Yes</button>
          <motion.button
            className="no"
            onMouseOver={handleMouseOver}
            animate={{ x: position.left, y: position.top }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            No
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Letter;
