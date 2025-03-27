// import React, { useEffect, useState } from "react";

// interface ImageRevealProps {
//   src: string;
//   alt: string;
//   direction: "top" | "right" | "bottom" | "left";
//   delay?: number;
// }

// const ImageReveal: React.FC<ImageRevealProps> = ({
//   src,
//   alt,
//   direction,
//   delay = 0,
// }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [delay]);

//   const getAnimationClass = () => {
//     switch (direction) {
//       case "top":
//         return "animate-slide-in-top";
//       case "right":
//         return "animate-slide-in-right";
//       case "bottom":
//         return "animate-slide-in-bottom";
//       case "left":
//         return "animate-slide-in-left";
//       default:
//         return "animate-fade-in";
//     }
//   };

//   return (
//     // <div className="image-container">
//     <div className="image-container rounded-lg overflow-hidden shadow-lg">
//       <img
//         src={src}
//         alt={alt}
//         className={`object-cover w-full h-full brightness-110 contrast-105 ${
//           isLoaded ? getAnimationClass() : "opacity-0"
//         }`}
//         style={{ animationDelay: `${delay}ms` }}
//       />
//     </div>
//   );
// };

// export default ImageReveal;
