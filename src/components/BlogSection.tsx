
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Nurturing Your Child's Spiritual Growth",
      excerpt: "Discover practical ways to support your child's spiritual journey and help them connect with their inner wisdom.",
      date: "May 5, 2025",
      category: "Parenting",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Creative Activities for Emotional Intelligence",
      excerpt: "Explore fun, creative activities that help children understand and express their emotions in healthy ways.",
      date: "April 28, 2025",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Power of Mindful Storytelling",
      excerpt: "Learn how storytelling can be used as a powerful tool for teaching mindfulness and presence to children.",
      date: "April 20, 2025",
      category: "Education",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section id="blog" className="section-container">
      <h2 className="section-title">Latest from our <span className="gradient-text">Blog</span></h2>
      <p className="section-subtitle">
        Insights, tips, and stories to support your family's spiritual journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post, index) => (
          <Card key={index} className="card-hover overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center text-sm text-missionpurple-700 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span className="bg-missionpurple-100 px-2 py-1 rounded-full text-xs">{post.category}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a 
                href="#" 
                className="text-missionpurple-500 font-medium inline-flex items-center hover:text-missionpurple-700"
              >
                Read More
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#" className="btn-primary inline-block">View All Posts</a>
      </div>
    </section>
  );
};

export default BlogSection;
