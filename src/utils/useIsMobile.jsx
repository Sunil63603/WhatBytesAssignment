//This custom hook is used to find if screen-size is of mobile or not.
//On mobile screen's bigCard will not be displayed(Smartphone Card)

//react imports
import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if window width is less than 640px (Tailwind's sm breakpoint)
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
