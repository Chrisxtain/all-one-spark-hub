
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Lock, User } from "lucide-react";
import { Link } from 'react-router-dom';

const MembersSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const exclusiveContent = [
    {
      id: 1,
      title: "Advanced Meditation Techniques",
      description: "In-depth guided meditations for spiritual growth and inner peace.",
      type: "Videos"
    },
    {
      id: 2,
      title: "Monthly Spiritual Growth Workshops",
      description: "Interactive live sessions with our spiritual guides and teachers.",
      type: "Events"
    },
    {
      id: 3,
      title: "Exclusive E-Books & Printables",
      description: "Downloadable resources for continued learning at home.",
      type: "Resources"
    },
  ];

  const memberBenefits = [
    "Access to premium videos and educational content",
    "Monthly live workshops and Q&A sessions",
    "Downloadable worksheets and activities",
    "Private community forum",
    "Early access to new releases"
  ];

  return (
    <section id="members" className="section-container bg-gradient-to-b from-missionpurple-50 to-white">
      <h2 className="section-title">Members <span className="gradient-text">Community</span></h2>
      <p className="section-subtitle">
        Join our exclusive members community to access premium content, resources, and events designed to deepen your spiritual journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div>
          <Card className="h-full border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-missionpurple-500 to-missionblue-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-display">Member Benefits</CardTitle>
              <CardDescription className="text-white/80">Everything included in your membership</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {memberBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-missiongreen-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-missiongreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/members">
                <Button className="w-full mt-8 btn-primary">Join Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-display font-medium">Exclusive Content Preview</h3>
          
          {exclusiveContent.map((item) => (
            <Collapsible key={item.id} className="border rounded-lg overflow-hidden">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-missionpurple-100 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-missionpurple-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-200"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 bg-slate-50 border-t">
                <p>{item.description}</p>
                <div className="flex justify-end mt-3">
                  <Link to="/members">
                    <Button variant="outline" size="sm" className="flex gap-2 items-center">
                      <Lock size={14} />
                      <span>Members Only</span>
                    </Button>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
