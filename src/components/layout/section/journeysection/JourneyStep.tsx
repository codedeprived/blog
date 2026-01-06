import { useEffect, useRef, useState } from "react";
import type { JourneyStep as StepType } from "./journeyData";

type Props = {
  step: StepType;
  align: "left" | "right";
};

function JourneyStep({ step, align }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex ${
        align === "left" ? "justify-start pr-12" : "justify-end pl-12"
      }`}
    >
      {/* Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-indigo-400 shadow-lg" />

      {/* Card */}
      <div
        className={`w-full max-w-md p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur
          transition-all duration-700 ease-out
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <span className="text-indigo-400 text-sm font-semibold">
          {step.year}
        </span>
        <h3 className="text-xl font-bold mt-2">{step.title}</h3>
        <p className="text-gray-400 mt-2 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export { JourneyStep };
