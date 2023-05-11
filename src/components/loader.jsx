import { useState, useEffect } from "react";

export const useLoader = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return loading;
};
