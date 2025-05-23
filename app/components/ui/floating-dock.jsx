"use client";
import { cn } from "../../lib/utils";
import React from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { useRef, useState,useEffect } from "react";
import Link from "next/link";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const Divider = () => (
  <div className="h-8 w-[2px] bg-gray-200 dark:bg-neutral-800 self-center" />
);

const FloatingDockMobile = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto md:hidden h-12 flex items-center justify-center gap-1 sm:gap-2 rounded-2xl px-3 pb-1",
        className
      )}>
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <IconContainer mouseX={mouseX} {...item} />
          {(index === 0 || index === 2 || index === 6) && <Divider />}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

const FloatingDockDesktop = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className
      )}>
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <IconContainer mouseX={mouseX} {...item} />
          {(index === 0 || index === 2 || index === 6) && <Divider />}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick
}) {
  let ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Add a resize listener to detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const baseSize = isMobile ? 40 : 50;
  const hoverSize = isMobile ? 48 : 60;
  const baseIconSize = isMobile ? 20 : 24;
  const hoverIconSize = isMobile ? 24 : 30;

  let widthTransform = useTransform(distance, [-150, 0, 150], [baseSize, hoverSize, baseSize]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [baseSize, hoverSize, baseSize]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [baseIconSize, hoverIconSize, baseIconSize]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [baseIconSize, hoverIconSize, baseIconSize]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setTimeout(() => setHovered(false), 1000)}
        className="relative flex aspect-square items-center justify-center ">
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white">
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
