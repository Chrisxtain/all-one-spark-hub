
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MemberContentProps {
  handleSignOut: () => Promise<void>;
}

const MemberContent: React.FC<MemberContentProps> = ({ handleSignOut }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-semibold mb-2">Welcome to the Members Area</h2>
          <p className="text-gray-600">You now have access to exclusive content and resources.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4 border shadow-sm">
            <h3 className="text-lg font-medium mb-2">Advanced Meditation Techniques</h3>
            <p className="text-gray-600 mb-4">Access in-depth guided meditations for spiritual growth.</p>
            <Button>View Content</Button>
          </Card>
          
          <Card className="p-4 border shadow-sm">
            <h3 className="text-lg font-medium mb-2">Exclusive E-Books</h3>
            <p className="text-gray-600 mb-4">Download our premium resources and printables.</p>
            <Button>Browse Library</Button>
          </Card>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MemberContent;
