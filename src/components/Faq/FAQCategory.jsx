import FAQAccordion from "./FAQAccordion";

export default function FAQCategory({
  category,
  questions,
}) {
  return (
    <section className="space-y-4">
      <h2
        className="
          text-2xl
          md:text-3xl
          font-black
          text-[#2B145A]
        "
      >
        {category}
      </h2>

      <div className="space-y-3">
        {questions.map((item, index) => (
          <FAQAccordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}