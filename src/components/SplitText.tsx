import React, { useEffect, useRef } from "react";

interface SplitTextProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  revealed?: boolean;
  delay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  tag = "div",
  className = "",
  revealed = false,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    chars.forEach((char, index) => {
      if (revealed) {
        setTimeout(() => {
          char.classList.add("revealed");
        }, delay + index * 30); // 30ms stagger per character
      }
    });

    return () => {
      chars.forEach((char) => {
        char.classList.remove("revealed");
      });
    };
  }, [revealed, delay]);

  // Split the text into individual characters
  const characters = text.split("").map((char, i) => (
    <span
      key={i}
      className="char"
      style={{
        transitionDelay: `${delay + i * 30}ms`,
        display: "inline-block",
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const Tag = tag as any;

  return (
    <Tag
      ref={containerRef as any}
      className={`split-text-animation ${
        revealed ? "revealed" : ""
      } ${className}`}
    >
      {characters}
    </Tag>
  );
};

export default SplitText;
