
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Book, BookOpen } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Animated Videos",
      description: "Engaging animated content that teaches spiritual concepts in a fun, accessible way for children and families.",
      icon: <Video className="h-8 w-8 text-missionpurple-500" />,
      link: "#videos"
    },
    {
      title: "Children's Books",
      description: "Beautifully illustrated stories that inspire creativity, self-discovery, and emotional intelligence.",
      icon: <Book className="h-8 w-8 text-missionpurple-500" />,
      link: "#books"
    },
    {
      title: "Educational Content",
      description: "Articles, guides, and activities designed to support spiritual growth and personal development.",
      icon: <BookOpen className="h-8 w-8 text-missionpurple-500" />,
      link: "#blog"
    }
  ];

  return (
    <section id="resources" className="bg-missionpurple-100 py-16">
      <div className="section-container">
        <h2 className="section-title">Explore Our <span className="gradient-text">Resources</span></h2>
        <p className="section-subtitle">
          Discover tools and content designed to inspire growth, creativity, and spiritual connection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {resources.map((resource, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-missionpurple-100 flex items-center justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{resource.description}</p>
                <a href={resource.link}>
                  <Button className="btn-primary">Explore</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
