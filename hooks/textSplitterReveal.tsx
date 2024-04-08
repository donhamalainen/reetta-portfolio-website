import React from "react";
import { motion } from "framer-motion";

export default function TextSplitterReveal({
  text,
  delayValue,
}: {
  text: string;
  delayValue: number;
}) {
  return (
    <p>
      {text.split("").map((char: any, i: number) => {
        return (
          <motion.span
            key={char + "-" + i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: i * delayValue } }}
          >
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}
