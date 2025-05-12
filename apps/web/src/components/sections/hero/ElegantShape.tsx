"use client";
import { motion } from "framer-motion";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";

type ElegantShapeProps = {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  image?: string;
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  image = "/1.png",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 aspect-square",
            "bg-gradient-to-r to-transparent"
          )}
        >
          <Image src={image} alt="decorative element" fill className="object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ElegantShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        image="/2.png"
        gradient="from-indigo-500/[0.15]"
        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] xl:block hidden"
      />

      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        image="/1.png"
        gradient="from-rose-500/[0.15]"
        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />

      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        image="/3.png"
        gradient="from-violet-500/[0.15]"
        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
      />

      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        image="/4.png"
        gradient="from-amber-500/[0.15]"
        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%] hidden sm:block"
      />

      <ElegantShape
        delay={0.7}
        width={150}
        height={40}
        rotate={-25}
        image="/5.png"
        gradient="from-cyan-500/[0.15]"
        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%] hidden sm:block"
      />
    </div>
  );
}