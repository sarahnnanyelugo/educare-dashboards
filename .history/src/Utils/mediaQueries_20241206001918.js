import { useMediaQuery } from "react-responsive";

export const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 769px)" });

export const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 768px)" });

export const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery();
  return isDesktop ? children : null;
};

export const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();
  return isTabletAndBelow ? children : null;
};
