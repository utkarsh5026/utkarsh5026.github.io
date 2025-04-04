import React, { useState, useEffect } from "react";
import { useTour } from "../context/TourContext";
import "./TourGuide.css";
import type { TourStep } from "../context/TourType";
import {
  type Emotion,
  emotionConfig,
  guideEmotions,
  guideMessages,
  emotionTailwindClasses,
} from "./config";
import { createPortal } from "react-dom";
import useTypewriting from "@/components/type-write/hooks/use-type-write";

/**
 * TourGuideAnimated component - Provides an animated character guide
 * that displays contextual messages based on the current tour step
 */
const TourGuideAnimated: React.FC = () => {
  const { active, currentStepId } = useTour();
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);

  const currentStepKey = currentStepId as TourStep;
  const emotion: Emotion =
    currentStepKey && guideEmotions[currentStepKey]
      ? guideEmotions[currentStepKey]
      : "default";

  const message: string =
    currentStepKey && guideMessages[currentStepKey]
      ? guideMessages[currentStepKey]
      : "Let's explore my portfolio together!";

  const { emoji, color } = emotionConfig[emotion];

  const tailwindClasses: string = emotionTailwindClasses[emotion];

  const { displayedText, isTyping } = useTypewriting({
    text: message,
    speed: 40,
    humanize: true,
  });

  useEffect(() => {
    if (!active || !currentStepId) return;
    setExpanded(true);
  }, [active, currentStepId, emotion]);

  if (!active || !currentStepId) return null;

  return createPortal(
    <>
      <div className="fixed bottom-10 right-8 z-[1000000] flex items-end max-w-sm tour-fade-in">
        {/* Guide character */}
        <div className="mr-3 z-10">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center
                      shadow-lg border-2 overflow-hidden tour-float
                      transition-all duration-300`}
            style={{
              borderColor: `var(--ctp-${color})`,
              boxShadow: `0 0 12px var(--ctp-${color})60`,
            }}
          >
            {imageLoaded ? (
              <img
                src={`/assets/guide-${emotion}.png`}
                alt={`Tour Guide - ${emotion}`}
                className="w-full h-full object-cover"
                onError={() => setImageLoaded(false)}
              />
            ) : (
              <div
                className={`flex items-center justify-center w-full h-full 
                          ${tailwindClasses}`}
              >
                <span className="text-2xl">{emoji}</span>
              </div>
            )}
          </div>
        </div>

        <div className="relative tour-slide-in z-[1000000] bg-ctp-sky">
          <div
            className="relative p-4 pr-6 rounded-lg backdrop-blur-md
                      shadow-lg overflow-hidden max-w-xs"
            style={{
              backgroundColor: `var(--ctp-mantle)dd`,
              borderColor: `var(--ctp-${color})`,
              borderWidth: "2px",
              boxShadow: `0 4px 20px var(--ctp-${color})30, 
                          inset 0 1px 1px var(--ctp-${color})20`,
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at center, var(--ctp-${color}), transparent 70%)`,
              }}
            />

            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                backgroundColor: `var(--ctp-${color})`,
                boxShadow: `0 0 10px var(--ctp-${color})`,
              }}
            ></div>

            <div
              className="text-sm relative z-10"
              style={{ color: `var(--ctp-text)` }}
            >
              {displayedText}
              {isTyping && (
                <span
                  className="text-cursor-blink ml-1"
                  style={{
                    color: `var(--ctp-${color})`,
                    textShadow: `0 0 5px var(--ctp-${color})`,
                  }}
                >
                  ▌
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Minimized state */}
      {!expanded && (
        <button
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center
                   shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300
                   hover:scale-110 active:scale-95 border-2"
          style={{
            backgroundColor: `var(--ctp-mantle)`,
            borderColor: `var(--ctp-${color})`,
            boxShadow: `0 0 15px var(--ctp-${color})50`,
          }}
          onClick={() => setExpanded(true)}
        >
          <div className="text-2xl relative z-10">{emoji}</div>

          {/* Glow background */}
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle at center, var(--ctp-${color}), transparent 70%)`,
            }}
          />

          {/* Notification indicator */}
          <div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full 
                     flex items-center justify-center text-xs border-2
                     animate-pulse"
            style={{
              backgroundColor: `var(--ctp-red)`,
              borderColor: `var(--ctp-mantle)`,
              boxShadow: `0 0 8px var(--ctp-red)`,
            }}
          ></div>
        </button>
      )}
    </>,
    document.body
  );
};

export default TourGuideAnimated;
