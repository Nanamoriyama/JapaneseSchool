"use client";
import React, { useState, useEffect } from "react";

const FreeTrialModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ページロード後にモーダルを表示
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Free Trial Lesson</h2>
        <p className="mb-4">
          We are offering for a free trial lesson. <br />
          Please contact us for more information.
        </p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-yellow-200 text-white rounded hover:bg-yellow-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FreeTrialModal;
