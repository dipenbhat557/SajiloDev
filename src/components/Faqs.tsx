import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-full bg-[#1F2123]">
      <div className="flex justify-center">
        <div className="max-w-4xl mx-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <button
                  className="text-blue-500 focus:outline-none "
                  aria-expanded={expandedIndex === index ? "true" : "false"}
                >
                  {expandedIndex === index ? "-" : "+"}
                </button>
              </div>
              {expandedIndex === index && (
                <p className="mt-2 text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
