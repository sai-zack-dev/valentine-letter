import { useState } from "react";
import { motion } from "framer-motion";

function RunawayButton({ text }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    setPosition({
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
    });
  };

  return (
    <motion.button 
      className="runaway" 
      onMouseEnter={moveButton}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
}

export default RunawayButton;
