import "./style.css";
import React, { useEffect, useState } from "react";
import Realization from "./realization/Realization";
import Panic from "./panic/main/Panic";
import CodeCompilation from "./compilation/CodeCompilation";
import MainPortfolio from "./MainPortfolio";
import PrankPortfolio from "./simple-portfolio/PrankPortfolio";
import FakePortfolioLoading from "./bridge/portfolio/FakePortfolioLoading";
import CompilationLoading from "./bridge/compile/CompilationLoading";

type PortfolioStage =
  | "realization"
  | "panic"
  | "chaos-loading"
  | "compilation"
  | "chaos"
  | "compilation-loading"
  | "portfolio";

/**
 * PortfolioStory component that manages the different stages of the portfolio experience.
 *
 * This component handles the transitions between various stages of the portfolio, including:
 * - Realization
 * - Panic
 * - Chaos Loading
 * - Compilation
 * - Chaos
 * - Compilation Loading
 * - Final Portfolio
 *
 * It also manages the visibility of a "Skip Intro" button based on whether the user has seen the intro before.
 *
 * @returns {JSX.Element} The rendered PortfolioStory component.
 */
const PortfolioStory: React.FC = () => {
  const [currentStage, setCurrentStage] =
    useState<PortfolioStage>("realization");
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenPortfolioIntro");
    if (hasSeenIntro === "true") {
      setShowSkipButton(true);
    }
  }, []);

  /**
   * Handler for when the realization stage is complete.
   * Transitions to the panic stage.
   */
  const handleRealizationComplete = () => setCurrentStage("panic");

  /**
   * Handler for when the panic stage is complete.
   * Transitions to the chaos loading stage.
   */
  const handlePanicComplete = () => {
    setCurrentStage("chaos-loading");
  };

  /**
   * Handler for when the compilation loading stage is complete.
   * Transitions to the compilation stage.
   */
  const handleCompilationLoadingComplete = () => {
    setCurrentStage("compilation");
  };

  /**
   * Handler for when the compilation stage is complete.
   * Transitions to the final portfolio stage and updates local storage.
   */
  const handleCompilationComplete = () => {
    setCurrentStage("portfolio");
    localStorage.setItem("hasSeenPortfolioIntro", "true");
  };

  /**
   * Handler for when the chaos loading stage is complete.
   * Transitions to the chaos stage.
   */
  const handleChaosLoadingComplete = () => {
    setCurrentStage("chaos");
  };

  /**
   * Handler for when the chaos stage is complete.
   * Transitions to the compilation loading stage.
   */
  const handleChaosComplete = () => {
    setCurrentStage("compilation-loading");
  };

  return (
    <div className="portfolio-story-container scene-transition-container">
      {currentStage === "realization" && (
        <Realization onComplete={handleRealizationComplete} />
      )}

      {currentStage === "panic" && <Panic onComplete={handlePanicComplete} />}

      {currentStage === "chaos" && (
        <PrankPortfolio onComplete={handleChaosComplete} />
      )}

      {currentStage === "compilation-loading" && (
        <CompilationLoading onComplete={handleCompilationLoadingComplete} />
      )}

      {currentStage === "compilation" && (
        <CodeCompilation onLoadComplete={handleCompilationComplete} />
      )}

      {currentStage === "chaos-loading" && (
        <FakePortfolioLoading
          onComplete={handleChaosLoadingComplete}
          duration={2000}
        />
      )}

      {currentStage === "portfolio" && <MainPortfolio />}

      {showSkipButton && currentStage !== "portfolio" && (
        <button
          className="skip-intro-button"
          onClick={handleCompilationComplete}
        >
          Skip Intro
        </button>
      )}
    </div>
  );
};

export default PortfolioStory;
