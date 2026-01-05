import { useEffect, useState, ReactNode } from "react";
import { FaDiscord, FaGithub, FaUser } from "react-icons/fa";

type Brand = {
  text: string;
  icon: ReactNode;
};

const brands: Brand[] = [
  { text: "Manmohan", icon: <FaUser className="text-indigo-400" /> },
  { text: "Tempest", icon: <FaDiscord className="text-indigo-400" /> },
  { text: "codedeprived", icon: <FaGithub className="text-gray-200" /> },
];

// Tunable timings (ms)
const TYPING_SPEED = 90;
const DELETING_SPEED = 60;
const HOLD_DURATION = 1200;

function TypingBrand(): JSX.Element {
  const [brandIndex, setBrandIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const currentBrand = brands[brandIndex];
  const currentText = currentBrand.text;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Finished typing → pause → start deleting
    if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), HOLD_DURATION);
    }
    // Finished deleting → move to next brand
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setBrandIndex((prev) => (prev + 1) % brands.length);
    }
    // Typing / deleting
    else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText.length]);

  return (
    <div className="flex items-center gap-2 font-bold tracking-wide text-white">
      {/* Icon */}
      <span className="text-lg transition-opacity duration-300">
        {currentBrand.icon}
      </span>

      {/* Text */}
      <span className="text-xl">
        {currentText.slice(0, charIndex)}
        <span className="ml-0.5 text-indigo-400 animate-pulse">|</span>
      </span>
    </div>
  );
}

export { TypingBrand };
