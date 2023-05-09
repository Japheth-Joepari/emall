import React, { useState, useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <div>Loading...</div> : null;
};

export default Loading;
