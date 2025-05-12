"use client";
import Logo from "@repo/ui/icons/Logo";
import { cn } from "@repo/ui/lib/utils";
import { buttonVariants } from "@repo/ui/stylesui/buttons";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

type HeroAnimationsProps = {
  badge?: string;
  title1: string;
  title2: string;
  description: string;
  buttonText: string;
  seccondButtonText: string;
}

export function HeroAnimations({
  badge,
  title1,
  title2,
  description,
  buttonText,
  seccondButtonText,
}: HeroAnimationsProps) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <>
      {badge && (
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 inline-block rounded-full bg-neutral-200/50 px-4 py-1.5 text-sm font-medium text-neutral-700"
        >
          <Logo className="w-20" />
        </motion.div>
      )}
      <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
        <h1 className="mb-6 text-6xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
          <span className="overflow-y-visible text-neutral-900">{title1}</span>
          <br />
          <span className="text-primary-500 overflow-y-visible ">
            {title2}
          </span>
        </h1>
      </motion.div>
      <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
        <p className="mx-auto mb-8 max-w-xl px-4 text-base leading-relaxed font-light tracking-wide text-neutral-600 sm:text-lg md:text-xl">
          {description}
        </p>
      </motion.div>
      <motion.div
        custom={3}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full items-center justify-center gap-4"
      >
        <Link href="/consultants" className={cn(buttonVariants({variant:"primary-outline"}))} >{seccondButtonText}</Link>
        <Link className={cn(buttonVariants())} href="/#contact-us">{buttonText}</Link>
      </motion.div>
    </>
  );
}
