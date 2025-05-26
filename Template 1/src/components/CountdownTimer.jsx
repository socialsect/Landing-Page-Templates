import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate = "2025-12-21T06:00:00+05:30" }) => {
  // timer is given as prop in hero section
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor(difference / 1000) % 60,
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBoxes = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="animate-slide-up">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {timeBoxes.map((box, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-2">
              {box.value < 10 ? `0${box.value}` : box.value}
            </div>
            <span className="text-xs tracking-[0.2em] font-light text-luxury-gold">
              {box.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
