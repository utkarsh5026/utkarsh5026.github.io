import { EditorProvider } from "@/components/home/editor/context/EditorProvider";
import CodeEditor from "@/components/home/editor/CodeEditor";
import TourPortal from "../home/tour/TourPortal";
import { TourProvider } from "../home/tour/context/TourProvider";

const MainPortfolio = () => {
  return (
    <EditorProvider>
      <TourProvider>
        <CodeEditor />
        <TourPortal />
      </TourProvider>
    </EditorProvider>
  );
};

export default MainPortfolio;
