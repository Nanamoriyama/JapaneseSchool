"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Les from "../components/Les";
import LoadingScreen from "../components/LoadingScreen";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [logoPosition, setLogoPosition] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoVisible(true);
      setTimeout(() => {
        setLogoPosition(true);
        setTimeout(() => {
          setContentVisible(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }, 2000);
      }, 1000);
    }, 100);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          logoVisible={logoVisible}
          logoPosition={logoPosition}
          isVisible={isLoading}
        />
      )}
      <div
        className={`transition-opacity duration-[5000ms] ease-in-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />

        <Hero />

        <div id="les">
          <Les />
        </div>

        <FadeInSection>
          <div id="about">
            <About />
          </div>
        </FadeInSection>
      </div>
    </>
  );
}
