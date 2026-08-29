import { useState } from "react";

export default function FAQAccordion({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        border
        border-[#E7E1F5]
        rounded-2xl
        overflow-hidden
        bg-white
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          justify-between
          items-center

          p-5

          text-left
          font-semibold
          text-[#2B145A]
        "
      >
        {question}

        <span
          className={`
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          className="
            px-5
            pb-5
            text-gray-600
            leading-relaxed
            whitespace-pre-line
          "
        >
          {answer}
        </div>
      )}
    </div>
  );
}