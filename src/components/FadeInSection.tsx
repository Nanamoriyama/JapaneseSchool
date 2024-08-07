"use client";
import React, { useRef, useState, useEffect } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // 要素がビューポート外に出たときにフェードアウトを再度可能にする
          }
        });
      },
      {
        threshold: 0.1, // 要素が10%表示されたときに発火
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-[2000ms] ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
