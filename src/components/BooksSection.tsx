
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BooksSection = () => {
  const books = [
    {
      title: "The Light Within",
      author: "Sarah Johnson",
      cover: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      description: "An illustrated journey to discovering the inner light that guides us all."
    },
    {
      title: "Journey to Self",
      author: "Michael Roberts",
      cover: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      description: "A heartwarming tale about a child's journey to understand their unique gifts."
    },
    {
      title: "Stars in Our Hearts",
      author: "Emma Thompson",
      cover: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "A magical story that teaches children about compassion and inner wisdom."
    },
  ];

  return (
    <section id="books" className="bg-missiongreen-100 py-16">
      <div className="section-container">
        <h2 className="section-title">Children's <span className="gradient-text">Books</span></h2>
        <p className="section-subtitle">
          Beautifully illustrated stories that inspire creativity, self-discovery, and emotional intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {books.map((book, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-display font-bold text-xl mb-1">{book.title}</h3>
                <p className="text-missionpurple-700 text-sm mb-3">by {book.author}</p>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="border-missionpurple-300 hover:bg-missionpurple-100">
                    Preview
                  </Button>
                  <Button className="btn-primary">Get Book</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-primary inline-block">Browse All Books</a>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
