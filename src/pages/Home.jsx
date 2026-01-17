import React from "react";
import Hero from "../Shared/Hero";
import JobCategories from "../Shared/JobCategories";
import CounterSection from "../Shared/CounterSection";
import Jobs from "../Shared/Jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategories />
      <Jobs />
      <CounterSection />
    </div>
  );
};

export default Home;
