import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Hammer,
  Lightbulb,
  PenTool,
  Cloud,
  Users,
  Briefcase,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const TagsSection = () => {
  const tags = [
    { text: "Product Development", icon: Lightbulb },
    { text: "Project Planning", icon: PenTool },
    { text: "Digital Transformation", icon: Cloud },
    { text: "Organizational Design", icon: Users },
    { text: "Talent Management", icon: Users },
    { text: "Project Planning", icon: PenTool },
    { text: "Management", icon: Briefcase },
    { text: "Strategy", icon: Target },
    { text: "Project Optimization", icon: Hammer },
    { text: "Risk & Compliance", icon: ShieldCheck },
    { text: "Sustainability", icon: Leaf },
  ];

  return (
    <div className="w-full bg-[#f2f1eb] py-10 sm:py-16 relative z-10">
      <div className="w-full sm:w-[90%] mx-auto relative flex flex-col justify-center min-h-[140px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-col gap-5">
          {/* First Row */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-4 whitespace-nowrap pl-4"
          >
            {[...tags, ...tags].map((tag, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex flex-row items-center justify-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full border border-gray-200/50 text-gray-700 font-medium text-sm leading-none h-11"
              >
                <tag.icon className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="translate-y-[1px]">{tag.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-4 whitespace-nowrap pr-4"
          >
            {[...tags.reverse(), ...tags].map((tag, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex flex-row items-center justify-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full border border-gray-200/50 text-gray-700 font-medium text-sm leading-none h-11"
              >
                <tag.icon className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="translate-y-[1px]">{tag.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TagsSection;
