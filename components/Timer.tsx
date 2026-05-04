"use client";

import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface TimerProps {
  totalSeconds: number;
  onTimeUp: () => void;
  isSubmitted: boolean;
}

export default function Timer({ totalSeconds, onTimeUp, isSubmitted }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const calledRef = useRef(false);

  useEffect(() => {
    if (isSubmitted) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          if (!calledRef.current) {
            calledRef.current = true;
            onTimeUp();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isSubmitted, onTimeUp]);

  const pct = (timeLeft / totalSeconds) * 100;
  const isWarning = timeLeft <= 300; // 5 min
  const isDanger = timeLeft <= 60;   // 1 min

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg shadow-sm border-2 transition-all ${
      isDanger
        ? "bg-red-100 border-red-400 text-red-700 animate-pulse"
        : isWarning
        ? "bg-yellow-100 border-yellow-400 text-yellow-700"
        : "bg-white border-gray-200 text-gray-700"
    }`}>
      <Clock size={20} className={isDanger ? "animate-spin" : ""} />
      <span>{formatTime(timeLeft)}</span>
      {isWarning && !isDanger && (
        <span className="text-xs font-normal text-yellow-600">Hampir habis!</span>
      )}
      {isDanger && (
        <span className="text-xs font-normal text-red-600">Segera kumpulkan!</span>
      )}
    </div>
  );
}
