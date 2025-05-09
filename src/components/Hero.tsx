
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-missionpurple-100 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Reconnect with your <span className="gradient-text">Inner Light</span> and <span className="gradient-text">Infinite Potential</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Empowering children, families, and individuals through spiritual growth, education, and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg px-8 py-6">Explore Resources</Button>
            <Button variant="outline" className="border-missionpurple-300 text-lg px-8 py-6 hover:bg-missionpurple-100">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="rounded-full bg-missionpurple-100 p-1 w-64 h-64 md:w-80 md:h-80 mx-auto relative overflow-hidden animate-pulse-gentle">
            <div className="absolute inset-0 bg-gradient-to-tr from-missionpurple-300/40 to-missionblue-300/40 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mx-auto animate-float">
                  <span className="text-5xl md:text-6xl">✨</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-medium mt-4 text-missionpurple-700">Mission All One</h3>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <div className="absolute top-0 left-1/4 w-20 h-20 rounded-full bg-missiongreen-100 animate-float"></div>
            <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-missionpink-100 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full bg-missionblue-100 animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
