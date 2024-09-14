import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: FunctionComponent<{}> = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  return null;
};

// export const ScrollToTop: FunctionComponent<{}> = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     requestAnimationFrame(() => window.scrollTo(0, 0));
//   }, [pathname]);
//   return null;
// };
