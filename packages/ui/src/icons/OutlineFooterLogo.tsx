'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '#lib/utils';

type OutlineLogoProps = {
  className?: string;
  strokeStyles?: string;
};

const OutlineLogo = ({ className, strokeStyles }: OutlineLogoProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.svg 
        className={cn(className)} 
        viewBox="0 0 303 96" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.path
          d="M202.766 17.204h-44.599V7.5h55.967v16.721l-35.086 35.702-.144.145V94.5h-10.868V57.117l35.086-35.701.144-.146V17.205h-.5zm30.184 61.588V8.372h10.743V77.605l.089.129 4.747 6.846.15.215h29.62v-9.087h10.868V94.5h-45.706L232.95 78.792zM32.047 7.5h33.68v87H54.93V55.151H22.173V94.5H11.5V28.7L32.047 7.5zm-9.731 23.664l-.143.146V45.34h32.756V17.311H35.893l-.147.15-13.43 13.703zm68.842 31.779V94.5H80.485v-87h10.673V48.716l.86-.888L131.03 7.5h14.161l-33.558 34.224-.286.292.229.339L146.946 94.5H135.35l-30.728-44.789-.346-.504-.426.44-12.551 12.948-.141.145v.203z"
          className={cn("stroke-neutral-50", strokeStyles)}
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export default OutlineLogo;