import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useNavigation = (section) => {
  const [activeSection, setActiveSection] = useState("home");
  const { ref, inView } = useInView({ threshold: 0 });

  const handleActiveSection = (link) => {
    setActiveSection(link);
  };

  useEffect(() => {
    if (inView) {
      setActiveSection(section);
    }
  }, [inView, section]);

  return { handleActiveSection, ref, activeSection };
};
