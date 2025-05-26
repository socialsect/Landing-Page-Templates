// src/components/TrackPageView.jsx
import React, { useEffect } from "react";

export const TrackPageView = () => {
  useEffect(() => {
    if (window.va) {
      window.va('track');
    }
  }, []);

  return null;
};