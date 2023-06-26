import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col text-center">
      <h1 className="head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-powered Prompts</span>
        <p className="desc">
          Stimuli is an open-source AI prompting tool to discover, create and
          share creative prompts
        </p>
      </h1>
      <Feed />
    </section>
  );
};

export default Home;
