"use client";

import { useEffect, useState } from "react";

export const useGetScreenProperties = () => {
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setScreen({
      width: width,
      height: height,
    });
  }, []);

  return { screen };
};
