
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideosSection = () => {
  const videos = [
    {
      title: "Finding Your Inner Light",
      duration: "4:15",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      description: "A gentle introduction to connecting with your inner wisdom and light."
    },
    {
      title: "The Power of Mindfulness",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "Learn simple mindfulness techniques adapted for children and families."
    },
    {
      title: "Creative Expression Journey",
      duration: "5:20",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Explore how creativity can be a pathway to spiritual growth and self-discovery."
    },
  ];

  return (
    <section id="videos" className="section-container">
      <h2 className="section-title">Animated <span className="gradient-text">Videos</span></h2>
      <p className="section-subtitle">
        Engaging content that teaches spiritual concepts in a fun, accessible way for children and families.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {videos.map((video, index) => (
          <Card key={index} className="card-hover overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="h-5 w-5 text-missionpurple-500 fill-current" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-display font-medium text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a href="#" className="btn-primary inline-block">View All Videos</a>
      </div>
    </section>
  );
};

export default VideosSection;
