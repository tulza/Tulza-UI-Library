import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import CursorContext from "@cursor/CursorContext";
import Main from "@pages/Main";
import PageNotFound from "@pages/PageNotFound";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <CursorContext>
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </CursorContext>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
