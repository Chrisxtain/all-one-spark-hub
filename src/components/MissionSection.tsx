
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MissionSection = () => {
  const missionValues = [
    {
      title: "Love",
      description: "We believe in the transformative power of unconditional love and compassion as the foundation for growth and connection.",
      icon: "💗",
      color: "bg-missionpink-100"
    },
    {
      title: "Empowerment",
      description: "We strive to provide tools and resources that help individuals recognize and harness their unique gifts and potential.",
      icon: "⚡",
      color: "bg-missionorange-300"
    },
    {
      title: "Creativity",
      description: "We encourage creative expression as a pathway to self-discovery, healing, and sharing one's unique light with the world.",
      icon: "🎨",
      color: "bg-missionblue-100"
    },
    {
      title: "Community",
      description: "We foster an inclusive space where individuals can connect, share, and grow together on their spiritual journeys.",
      icon: "🤝",
      color: "bg-missiongreen-100"
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Our <span className="gradient-text">Mission</span></h2>
      <p className="section-subtitle">
        Mission All One is dedicated to empowering children, families, and individuals to reconnect with their inner light and infinite potential.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {missionValues.map((value, index) => (
          <Card key={index} className="card-hover border-none overflow-hidden">
            <CardContent className={`p-6 text-center ${value.color}`}>
              <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center mb-4 text-4xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
