import React, { useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useOutline } from "@/components/home/editor/outline/context/outlineContext";
import {
  useEditorContext,
  type SectionType,
} from "@/components/home/editor/context/explorerContext";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import MobileEditorDropdown from "./MobileEditorDropdown";
import { sectionIconMap, getIconColor, getActiveTabColor } from "./tab-style";

interface EditorTabsProps {
  sections: Record<SectionType, React.ReactNode>;
}

/**
 * Modern EditorTabs component using Shadcn UI
 * Provides a sleek tab interface for switching between different sections
 * Optimized for both desktop and mobile with responsive design
 * Uses the project's Catppuccin color theme for visual consistency
 */
const EditorTabs: React.FC<EditorTabsProps> = ({ sections }) => {
  const { setCurrentSection } = useOutline();
  const { activeSection, setActiveSection } = useEditorContext();

  // Extract section keys from the sections object
  const sectionKeys = useMemo(
    () => Object.keys(sections) as SectionType[],
    [sections]
  );

  // Update the current section in the outline context when active section changes
  useEffect(
    () => setCurrentSection(activeSection),
    [activeSection, setCurrentSection]
  );

  // Gets icon color based on section type for consistent visual cues

  return (
    <div className="sticky top-0 bg-ctp-mantle border-b border-ctp-surface0 z-10">
      {/* Mobile Dropdown - shown on small screens */}
      <div className="md:hidden">
        <MobileEditorDropdown
          sectionKeys={sectionKeys}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* Desktop Tabs - hidden on small screens */}
      <div className="hidden md:block">
        <Tabs
          value={activeSection}
          onValueChange={(value) => setActiveSection(value as SectionType)}
          className="w-full"
        >
          <div className="w-full overflow-x-auto scrollbar-hide">
            <TabsList className="h-10 bg-transparent px-2 py-0 w-max min-w-full flex items-center rounded-none justify-start">
              {sectionKeys.map((section) => {
                const iconColor = getIconColor(section);
                return (
                  <TabsTrigger
                    key={section}
                    value={section}
                    className={cn(
                      "relative h-9 px-4 rounded-none font-mono text-xs transition-all duration-200",
                      "data-[state=inactive]:bg-ctp-surface0/50 data-[state=inactive]:text-ctp-subtext0",
                      "data-[state=active]:bg-ctp-base data-[state=active]:text-ctp-text",
                      "hover:bg-ctp-surface0 hover:text-ctp-text",
                      "focus-visible:ring-ctp-lavender focus-visible:ring-opacity-50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn("w-3 h-3", iconColor)}>
                        {sectionIconMap[section]}
                      </span>
                      <span className="text-sm font-medium text-ctp-text capitalize">
                        {section}
                      </span>
                    </div>

                    {/* Animated active indicator */}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r",
                          getActiveTabColor(section)
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default EditorTabs;
