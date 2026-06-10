"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface TextRevealByWordProps {
  text: string;
  className?: string;
  textClassName?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  textClassName
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 50%"]
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 w-full", className)}>
      <div className={"w-full flex items-center bg-transparent"}>
        <p
          className={cn(
            "flex flex-wrap text-slate-300",
            textClassName
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-1.5 mb-1">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-slate-600"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
