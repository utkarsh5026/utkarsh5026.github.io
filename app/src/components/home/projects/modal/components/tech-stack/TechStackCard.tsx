import { ProjectTheme } from "@/components/home/projects/context/ThemeContext";
import { cn } from "@/lib/utils";
import getCategoryIcon from "@/components/base/category-icon";

type TechStackCard = {
  category: string;
  technologies: string[];
  index: number;
};
interface TechStackCardProps {
  card: TechStackCard;
  theme: ProjectTheme;
  isActive: boolean;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  card,
  theme,
  isActive,
}) => {
  const CategoryIcon = getCategoryIcon(card.category);
  return (
    <div
      className={cn(
        "w-full h-full rounded-xl sm:rounded-2xl overflow-hidden flex flex-col relative",
        "bg-ctp-mantle",
        `backdrop-blur-sm border-2 border-ctp-${theme.main}/20`,
        "transition-all duration-300 ease-out",
        isActive
          ? `shadow-2xl shadow-ctp-${theme.main}/60 border-ctp-${theme.main}/40 scale-[1.02]`
          : "shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
      )}
    >
      {/* Card Header */}
      <div className="relative z-10 p-3 sm:p-4 lg:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <div
              className={cn(
                "p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl relative overflow-hidden",
                "border border-white/10 backdrop-blur-sm"
              )}
            >
              <CategoryIcon
                className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-ctp-${theme.main} relative z-10`}
              />
              <div
                className={cn(
                  "absolute inset-0 rounded-lg sm:rounded-xl opacity-50",
                  `bg-gradient-to-br from-ctp-${theme.main}/30 to-transparent`
                )}
              />
            </div>
            <div>
              <h3
                className={cn(
                  "text-lg sm:text-xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent",
                  `text-ctp-${theme.main}`
                )}
              >
                {card.category}
              </h3>
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium",
                    `bg-ctp-${theme.main}/15 text-ctp-${theme.main} border border-ctp-${theme.main}/20`
                  )}
                >
                  {card.technologies.length}{" "}
                  {card.technologies.length === 1 ? "tech" : "techs"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 h-auto overflow-y-auto custom-scrollbar flex-1">
        <div className="grid gap-2 sm:gap-3">
          {card.technologies.map((tech, techIndex) => {
            const [name, description] = tech.includes(" - ")
              ? tech.split(" - ")
              : [tech, ""];

            return (
              <div
                key={`${tech}-${techIndex}`}
                className={cn(
                  "group relative p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300",
                  "bg-gradient-to-br from-ctp-surface0/80 to-ctp-surface0/40",
                  "border border-white/5 backdrop-blur-sm",
                  "hover:border-white/20 hover:shadow-lg hover:shadow-black/20",
                  isActive && "hover:scale-[1.02] hover:-translate-y-1"
                )}
              >
                {/* Tech Item Glow Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    `bg-gradient-to-r from-ctp-${theme.main}/10 to-ctp-${theme.secondary}/5`
                  )}
                />

                <div className="relative z-10 flex items-start gap-2 sm:gap-3">
                  <div
                    className={cn(
                      "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 transition-all duration-300",
                      `bg-gradient-to-r from-ctp-${theme.main} to-ctp-${theme.secondary}`,
                      "group-hover:scale-125 group-hover:shadow-lg",
                      `group-hover:shadow-ctp-${theme.main}/50`
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-ctp-text text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-200 break-words">
                      {name}
                    </div>
                    {description && (
                      <div className="text-ctp-subtext0 text-xs leading-relaxed group-hover:text-ctp-subtext1 transition-colors duration-200 break-words">
                        {description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card Footer */}
      <div className="relative z-10 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 bg-gradient-to-r from-ctp-surface0/30 to-ctp-surface0/10 backdrop-blur-sm border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={cn(
                "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full",
                `bg-gradient-to-r from-ctp-${theme.main} to-ctp-${theme.secondary}`
              )}
            />
            <span className="text-ctp-subtext1 text-xs font-medium">
              Stack Layer {card.index + 1}
            </span>
          </div>
          <div
            className={cn(
              "px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-semibold",
              "bg-gradient-to-r from-black/20 to-black/10",
              "border border-white/10 backdrop-blur-sm",
              `text-ctp-${theme.main}`
            )}
          >
            {card.technologies.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
