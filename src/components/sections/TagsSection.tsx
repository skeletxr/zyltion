import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Briefcase,
  Lightbulb,
  MessageSquare,
  Globe,
  Database,
  Target,
  PenTool,
  Cloud,
  TrendingUp,
} from "lucide-react";

const TagsSection = () => {
  const tags = [
    { text: "Automation", icon: Zap },
    { text: "Custom CRM", icon: Briefcase },
    { text: "AI Integration", icon: Lightbulb },
    { text: "Smart Chatbots", icon: MessageSquare },
    { text: "Web Apps", icon: Globe },
    { text: "Database Syncing", icon: Database },
    { text: "Lead Interception", icon: Target },
    { text: "Business Logic", icon: PenTool },
    { text: "Cloud Systems", icon: Cloud },
    { text: "Workflow Design", icon: TrendingUp },
    { text: "Digital Growth", icon: TrendingUp },
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
