import { journeyData } from "./journeyData";
import { JourneyStep } from "./JourneyStep";

function JourneySection(): JSX.Element {
  return (
    <section
      id="journey"
      className="relative bg-black text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Vertical road */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500/40 via-indigo-500/80 to-indigo-500/40 -translate-x-1/2" />

        {/* Steps */}
        <div className="flex flex-col gap-40">
          {journeyData.map((step, index) => (
            <JourneyStep
              key={index}
              step={step}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { JourneySection };
