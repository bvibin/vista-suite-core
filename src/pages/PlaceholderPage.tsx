import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
  actionText?: string;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  actionText = "Get Started" 
}: PlaceholderPageProps) {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-card-foreground mb-2">
              {title}
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-muted rounded-lg p-8 mb-6">
              <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/40 rounded-full"></div>
              </div>
              <p className="text-muted-foreground">
                This page is coming soon. We're working hard to bring you something amazing!
              </p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {actionText}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}