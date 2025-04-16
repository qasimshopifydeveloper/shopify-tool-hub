
import { Rocket, BarChart, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Introduction = () => {
  const features = [
    {
      icon: Rocket,
      title: "Powerful Tools",
      description: "Access professionally built tools that solve real Shopify problems",
    },
    {
      icon: BarChart,
      title: "Boost Sales",
      description: "Optimize your store with data-driven insights and automation",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate tedious tasks and focus on growing your business",
    },
    {
      icon: MessageSquare,
      title: "Expert Support",
      description: "Get help from certified Shopify developers when you need it",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is ShopifyTools.com?
          </h2>
          <p className="text-xl text-muted-foreground">
            A central hub of powerful, efficient, and free-to-use tools, guides, and resources created to solve the ongoing issues faced by Shopify store owners and developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/tools">Start Discovering Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
