import { motion } from "framer-motion";
import "../styles/envelope.scss";
import Letter from "./Letter";
import { useState } from "react";

function Envelope({ receiver, question, onYesClick }) {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div
      className="envelope"
      whileHover={{ scale: 1.05 }}
      onClick={() => setOpen(true)}
    >
      <Letter question={question} onYesClick={onYesClick} open={open}/>
      <div className="envelope-front">
        <p>To. {receiver}</p>
      </div>
    </motion.div>
  );
}

export default Envelope;
