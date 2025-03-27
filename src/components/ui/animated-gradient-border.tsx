import type React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderWidth?: number;
  duration?: number;
  animate?: boolean;
}

const AnimatedGradientBorder: React.FC<AnimatedGradientBorderProps> = ({
  children,
  className,
  containerClassName,
  borderWidth = 2,
  duration = 4,
  animate = true,
}) => {
  return (
    <div className={cn("relative rounded-xl", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-xl z-0",
          animate &&
            "bg-[conic-gradient(from_var(--angle),var(--tw-gradient-stops))]",
          "from-fitness-cyan via-fitness-magenta to-fitness-cyan"
        )}
        style={
          {
            "--angle": "0deg",
            animation: animate
              ? `rotation ${duration}s linear infinite`
              : "none",
          } as React.CSSProperties
        }
      />
      <div
        className={cn("relative z-10 rounded-xl bg-fitness-dark", className)}
        style={{ margin: `${borderWidth}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedGradientBorder;
