import { motion } from "framer-motion";
import "../styles/celebration.scss";

const flowerVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 100 },
};

function Celebration() {
  // Create an array of 10 flowers
  const flowers = Array.from({ length: 10 });
  return (
    <div className="celebration">
      {flowers.map((_, index) => (
        <motion.div
          key={index}
          className="flower"
          style={{ left: `${Math.random() * 100}%` }}
          variants={flowerVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: Math.random() * 0.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}

export default Celebration;
