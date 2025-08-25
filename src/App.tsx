import React from "react";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
