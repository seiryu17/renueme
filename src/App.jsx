import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValuesSection from "./components/ValuesSection";
import CommunityForm from "./components/CommunityForm";
import Footer from "./components/Footer";
import Marque from "./components/Marque";
import "./App.css";
import Statistics from "./components/Statistics";
import Store from "./components/Store";
import { ParallaxProvider } from "react-scroll-parallax";
import FAQSection from "./components/FAQSection";

const App = () => (
  <div>
    <ParallaxProvider>
      <Marque />
      <Header />
      <Hero />
      <Statistics />
      <Store />
      <ValuesSection />
      <FAQSection />
      <CommunityForm />
      <Footer />
    </ParallaxProvider>
  </div>
);

export default App;
