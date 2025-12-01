'use client';

import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants?: Variants;
  [key: string]: any; // Allow other props
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  as: Component = 'div',
  children,
  className,
  animationNum,
  timelineRef,
  customVariants,
  ...props
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.5 });

  const defaultVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: { opacity: 0, y: 20 },
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariants || defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
