import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useNavigation = (section) => {
  const { ref, inView } = useInView({ threshold: 0 });

  const handleActiveSection = (link) => {
    setActiveSection(link);
  };

  useEffect(() => {
    if (inView) {
      setActiveSection(section);
      console.log(activeSection);
    }
  }, []);

  return { activeSection, handleActiveSection, ref };
};
