import "./App.css";
import React from "react";
import Footer from "./components/pages//Footer";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="h-screen w-screen">
      <main className="text-gray-400 bg-gray-900 body-font h-full w-full">
        <PortfolioContainer />
        <Footer />
      </main>
    </div>
  );
}

export default App;
