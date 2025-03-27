// import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

// const Preloader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={cn(
//         "fixed inset-0 z-50 bg-fitness-darker flex-center transition-opacity duration-500",
//         isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
//       )}
//     >
//       <div className="relative">
//         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fitness-cyan to-fitness-magenta flex-center animate-pulse">
//           <div className="w-14 h-14 rounded-full bg-fitness-darker flex-center">
//             <span className="text-white font-bold text-xl">F</span>
//           </div>
//         </div>
//         <div className="mt-4 text-white font-medium">FlexAI</div>
//         <div className="mt-2 flex justify-center space-x-2">
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               className="w-2 h-2 rounded-full bg-white/60 animate-pulse"
//               style={{ animationDelay: `${i * 0.2}s` }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-fitness-dark flex items-center justify-center transition-opacity duration-500",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-fitness-cyan to-fitness-magenta flex items-center justify-center">
          <span className="text-white font-bold text-4xl">F</span>
        </div>

        {/* Loading spinner */}
        <div className="absolute inset-0 rounded-full border-4 border-t-fitness-cyan border-r-fitness-magenta border-b-fitness-cyan border-l-fitness-magenta opacity-30 animate-spin"></div>
      </div>
    </div>
  );
};

export default Preloader;
