import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to the top on every route change so each page opens
// at its hero — except when navigating to an in-page anchor (#hash), where we
// let the browser scroll to the target instead. Jumps instantly (not smooth)
// so route changes never animate a long scroll from the previous page.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
