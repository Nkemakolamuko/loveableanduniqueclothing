import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the return policy?",
    answer: "We offer a 30-day return policy. You can return items within 30 days of purchase for a full refund or exchange.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide. Shipping times and costs may vary depending on the destination.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has been placed, you will receive an email with the timeline and a WhatsApp link to chat with.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major popular payment methods.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer p-4 bg-gray-100 rounded-t-md flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-medium">{faq.question}</h3>
            <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-white border border-gray-200 rounded-b-md text-sm">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
